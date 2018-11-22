import React from 'react';
import P from 'prop-types';
import { css } from 'react-emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from './Input';
import Button from './Button';

const propTypes = {
    article: P.shape({
        title: P.string,
        id: P.number,
    }).isRequired,
};

const Card = ({
    article,
    activeComment,
    handleOnChangeComment,
    handleOnAddComment,
    handleOnClickLike,
}) => {
    const renderComments = comments => {
        return comments.map((comment, index) => (
            <div className="row mt-4" key={index}>
                <div className="col-sm-2">
                    <img
                        src={comment.avatar}
                        alt="Avatar"
                        className="img-thumbnail"
                    />
                </div>
                <div className="col-sm-10">
                    <p className="font-weight-bold mb-1">{`${
                        comment.firstName
                    } ${comment.lastName}`}</p>
                    <p>{comment.message}</p>
                </div>
            </div>
        ));
    };

    return (
        <div className={`card mb-2 article ${articleStyle}`}>
            <div className="card-body p-0">
                <button
                    className={`col-sm-2 ${thumbsUpButtonStyle}`}
                    onClick={() => {
                        handleOnClickLike(article.id);
                    }}
                >
                    <FontAwesomeIcon icon="thumbs-up" color="#171717" />
                    <div className="votes">
                        <p>{article.votes} votes</p>
                    </div>
                </button>

                <button
                    className={`col-sm-10 py-4 px-0 ${collapseButton}`}
                    data-toggle="collapse"
                    data-target={`#collapse${parseInt(article.id)}`}
                >
                    <div className="row">
                        {/* <div className="col-sm-2 votes">
                            <p>{article.votes} votes</p>
                        </div> */}
                        <div className="col-sm-6">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="mb-0">
                                <a
                                    href={article.url}
                                    target="_blank"
                                    className="card-link"
                                >
                                    {article.url}
                                </a>
                            </p>
                        </div>
                        <div className={`col-sm-4 ${commentsCountStyle}`}>{`${
                            article.comments.length
                        } comments`}</div>
                    </div>
                </button>
                <div
                    className="collapse pb-4 px-4"
                    id={`collapse${parseInt(article.id)}`}
                >
                    {renderComments(article.comments)}
                    <div className="form-group input-group offset-sm-2 input-group-lg mt-4">
                        <Input
                            type="text"
                            value={activeComment}
                            placeholder="Write comment..."
                            handleOnChange={handleOnChangeComment}
                        />
                        <div className="input-group-append">
                            <Button
                                type="button"
                                text="Add comment"
                                handleOnClick={handleOnAddComment}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = propTypes;

const articleStyle = css({
    '&:hover': {
        boxShadow: '0px 2px 4px #dcdce0',
    },
});

const collapseButton = css({
    zIndex: 1,
    width: '100%',
    background: 'none',
    textAlign: 'left',
    border: 'none',
    outline: '0 !important',

    '&:hover': {
        cursor: 'pointer',
    },
});

const thumbsUpButtonStyle = css({
    zIndex: 2,
    border: 'none',
    outline: '0 !important',

    '&:hover': {
        cursor: 'pointer',
    },
});

const commentsCountStyle = css({
    alignSelf: 'flex-end',
});

export default Card;
