import { fetchArticles, postNewArticle } from '../../services/Articles';
import sortArticles from '../../util/sort';

const ARTICLES_PENDING = 'ARTICLES_PENDING';
const ARTICLES_SUCCESS = 'ARTICLES_SUCCESS';
const NEW_ARTICLE_PENDING = 'NEW_ARTICLE_PENDING';
const NEW_ARTICLE_SUCCESS = 'NEW_ARTICLE_SUCCESS';
const ARTICLE_UPVOTE = 'ARTICLE_UPVOTE';
const ARTICLE_URL_UPDATE = 'ARTICLE_URL_UPDATE';
const ARTICLE_NAME_UPDATE = 'ARTICLE_NAME_UPDATE';
const COMMENT_ADD = 'COMMENT_ADD';
const COMMENT_UPDATE = 'COMMENT_UPDATE';

export const getArticles = () => {
    return dispatch => {
        dispatch({ type: ARTICLES_PENDING });
        fetchArticles().then(res => {
            dispatch({ type: ARTICLES_SUCCESS, payload: res });
        });
    };
};

export const createArticle = articleData => {
    return dispatch => {
        dispatch({ type: NEW_ARTICLE_PENDING });
        postNewArticle(articleData).then(res => {
            dispatch({ type: NEW_ARTICLE_SUCCESS, payload: res });
        });
    };
};

export const updateActiveComment = articleData => ({
    type: COMMENT_UPDATE,
    payload: articleData,
});

export const updateArticleName = text => ({
    type: ARTICLE_NAME_UPDATE,
    payload: text,
});

export const updateArticleUrl = text => ({
    type: ARTICLE_URL_UPDATE,
    payload: text,
});

export const addComment = commentData => {
    const { id, comment } = commentData;
    return {
        type: COMMENT_ADD,
        payload: { id, comment },
    };
};

export const upVote = articlesId => ({
    type: ARTICLE_UPVOTE,
    payload: articlesId,
});

const defaultState = {
    articles: [],
    fetchArticlesPending: false,
    fetchArticlesSuccess: false,
    newArticlePending: false,
    newArticleSuccess: false,
    articleName: '',
    articleUrl: '',
};

const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ARTICLES_PENDING: {
            return { ...state, fetchArticlesPending: true };
        }
        case ARTICLES_SUCCESS: {
            return {
                ...state,
                fetchArticlesPending: false,
                articles: sortArticles(payload),
            };
        }
        case NEW_ARTICLE_PENDING: {
            return {
                ...state,
                newArticlePending: true,
            };
        }
        case NEW_ARTICLE_SUCCESS: {
            return {
                ...state,
                articles: [...state.articles, payload],
                newArticlePending: false,
                newArticleSuccess: true,
            };
        }
        case ARTICLE_UPVOTE: {
            return {
                ...state,
                articles: sortArticles(
                    state.articles.map(article => {
                        if (article.id === payload) {
                            return {
                                ...article,
                                votes: article.votes + 1,
                            };
                        }
                        return article;
                    })
                ),
            };
        }
        case ARTICLE_NAME_UPDATE: {
            return {
                ...state,
                articleName: payload,
            };
        }
        case ARTICLE_URL_UPDATE: {
            return {
                ...state,
                articleUrl: payload,
            };
        }
        case COMMENT_ADD: {
            return {
                ...state,
                articles: state.articles.map(article => {
                    if (article.id === payload.id) {
                        return {
                            ...article,
                            comments: [...article.comments, payload.comment],
                        };
                    }
                    return article;
                }),
            };
        }
        case COMMENT_UPDATE: {
            return {
                ...state,
                articles: state.articles.map(article => {
                    if (article.id === payload.article.id) {
                        return {
                            ...article,
                            activeComment: payload.text,
                        };
                    }
                    return article;
                }),
            };
        }
        default:
            return state;
    }
};

export default reducer;
