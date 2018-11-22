import orderBy from 'lodash.orderby';

const sortArticles = list => {
    return orderBy(list, [item => item.votes], ['desc']);
};

export default sortArticles;
