import { connect } from 'react-redux';

import ArticlesContainer from '../../components/containers/ArticlesContainer';
import {
    getArticles,
    updateActiveComment,
    updateArticleName,
    updateArticleUrl,
    addComment,
    upVote,
    createArticle,
} from '../modules/articles';

const mapStateToProps = ({
    articlesModule: {
        articles,
        fetchArticlesPending,
        fetchArticlesSuccess,
        articleName,
        articleUrl,
    },
    userModule: { user },
}) => ({
    articles,
    fetchArticlesPending,
    fetchArticlesSuccess,
    user,
    articleName,
    articleUrl,
});

const mapDispatchToProps = dispatch => ({
    getArticles: () => dispatch(getArticles()),
    updateActiveComment: text => dispatch(updateActiveComment(text)),
    updateArticleName: text => dispatch(updateArticleName(text)),
    updateArticleUrl: text => dispatch(updateArticleUrl(text)),
    addComment: comment => dispatch(addComment(comment)),
    createArticle: articleData => dispatch(createArticle(articleData)),
    upVote: articleId => dispatch(upVote(articleId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesContainer);
