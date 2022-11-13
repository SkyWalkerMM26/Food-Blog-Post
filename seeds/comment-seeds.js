const { Comment } = require('../models');

const commentData = [
    {
        content: 'Looks yummy',
        user_id: 1,
        post_id: 1
    },
    {
        content: 'What a feast!',
        user_id: 2,
        post_id: 2
    },
    {
        content: 'Am starving',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments
