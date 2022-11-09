const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Looks yummy',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'What a feast!',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Am starving',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments
