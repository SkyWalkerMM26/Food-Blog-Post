const { Post } = require('../models');

const postData = [
    {
        title: 'What Diet?',
        category: 'Korean',
        content_box: 'Content example',
        image: 'https://via.placeholder.com/400',
        user_id: 3
    },
    {
        title: 'Damn Delicious',
        category: 'Thai',
        content_box: 'This is res is offering amazing food',
        image: 'https://via.placeholder.com/400',
        user_id: 1
    },
    {
        title: 'Wow, Yum',
        category: 'American',
        content_box: 'The best breakfast in town',
        image: 'https://via.placeholder.com/400',
        user_id: 2
    },
    {
        title: 'How to make a peanut butter bread',
        category: 'Other',
        content_box: 'Follow the ingredients and steps as below',
        image: 'https://via.placeholder.com/400',
        user_id: 3
    },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;