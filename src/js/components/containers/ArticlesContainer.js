import React, { Component } from 'react';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';

import Card from '../presentational/Card';
import Input from '../presentational/Input';
import Button from '../presentational/Button';

class ArticlesContainer extends Component {
    constructor() {
        super();
        this.handleOnClickLike = this.handleOnClickLike.bind(this);
        this.handleOnChangeComment = this.handleOnChangeComment.bind(this);
        this.handleOnChangeArticleName = this.handleOnChangeArticleName.bind(
            this
        );
        this.handleOnChangeArticleUrl = this.handleOnChangeArticleUrl.bind(
            this
        );
        this.handleOnAddArticle = this.handleOnAddArticle.bind(this);
    }

    componentWillMount() {
        const { getArticles } = this.props;
        getArticles();
    }

    handleOnClickLike(articleId) {
        const { upVote } = this.props;
        upVote(articleId);
    }

    handleOnChangeComment(article) {
        const { updateActiveComment } = this.props;
        return event => {
            updateActiveComment({ article, text: event.target.value });
        };
    }

    handleOnChangeArticleName(event) {
        const { updateArticleName } = this.props;
        updateArticleName(event.target.value);
    }

    handleOnChangeArticleUrl(event) {
        const { updateArticleUrl } = this.props;
        updateArticleUrl(event.target.value);
    }

    handleOnAddArticle() {
        const { articleName, articleUrl, createArticle } = this.props;
        if (articleName !== '' && articleUrl !== '') {
            createArticle({ title: articleName, url: articleUrl });
        }
    }

    handleOnAddComment(article) {
        const {
            addComment,
            updateActiveComment,
            user: { firstName, lastName, avatar },
        } = this.props;
        if (article.activeComment !== '') {
            return () => {
                addComment({
                    id: article.id,
                    comment: {
                        message: article.activeComment,
                        firstName,
                        lastName,
                        avatar,
                    },
                });
                updateActiveComment({ article, text: '' });
            };
        }
        return;
    }

    renderArticles() {
        const { articles } = this.props;
        return articles.map(article => (
            <div className="col-sm-12" key={article.id}>
                <Card
                    article={article}
                    activeComment={article.activeComment}
                    handleOnClickLike={this.handleOnClickLike}
                    handleOnChangeComment={this.handleOnChangeComment(article)}
                    handleOnAddComment={this.handleOnAddComment(article)}
                />
            </div>
        ));
    }

    render() {
        const { fetchArticlesPending, articleName, articleUrl } = this.props;
        return (
            <div>
                <div className="jumbotron mb-2 bg-light">
                    {fetchArticlesPending ? (
                        <div className="loader-container">
                            <ClipLoader
                                className={loaderStyle}
                                sizeUnit={'px'}
                                size={50}
                                color={'#171717'}
                                loading={fetchArticlesPending}
                            />
                        </div>
                    ) : (
                        <div className="form-inline justify-content-center">
                            <div className="form-group input-group-lg mt-4">
                                <Input
                                    type="text"
                                    value={articleName}
                                    placeholder="Article name"
                                    style={articleInputStyle}
                                    handleOnChange={
                                        this.handleOnChangeArticleName
                                    }
                                />
                                <Input
                                    type="text"
                                    value={articleUrl}
                                    placeholder="Article url"
                                    style={articleInputStyle}
                                    handleOnChange={
                                        this.handleOnChangeArticleUrl
                                    }
                                />
                                <Button
                                    type="button"
                                    text="Add article"
                                    handleOnClick={this.handleOnAddArticle}
                                />
                            </div>
                            <div className="form-group col-sm-12 input-group input-group-lg mt-2">
                                <div className="row">
                                    {this.renderArticles()}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const loaderStyle = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const articleInputStyle = {
    marginRight: '1rem',
};

export default ArticlesContainer;
