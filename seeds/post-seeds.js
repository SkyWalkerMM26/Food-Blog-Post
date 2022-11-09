const { Post } = require('../models');

const postData = [
    {
        title: 'Damn Delicious',
        text: 'This is res is offering amazing food',
        user_id: 1
    },
    {
        title: 'Wow, Yum',
        text: 'The best breakfast in town',
        user_id: 2
    },
    {
        title: 'How to make a peanut butter bread',
        text: 'Follow the ingredients and steps as below',
        user_id: 3
    },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;