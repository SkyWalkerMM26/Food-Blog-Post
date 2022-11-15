const { Comment } = require('../models');

const commentData = [
  {
    content: 'Looks yummy',
    user_id: 4,
    post_id: 1,
  },
  {
    content: 'What a feast!',
    user_id: 2,
    post_id: 1,
  },
  {
    content: 'Am starving',
    user_id: 1,
    post_id: 1,
  },
  {
    content:
      'I just tried it for the first time! Can`t wait to try it again on my next trip to SF',
    user_id: 4,
    post_id: 2,
  },
  {
    content: 'I want to give Little Sweet a try!',
    user_id: 3,
    post_id: 3,
  },
  {
    content: 'OOOO that looks yummy!',
    user_id: 2,
    post_id: 4,
  },
  {
    content: 'Those look so filling!',
    user_id: 1,
    post_id: 5,
  },
  {
    content: 'That sounds incredible!',
    user_id: 1,
    post_id: 6,
  },
  {
    content: 'I love hanging out there!',
    user_id: 1,
    post_id: 7,
  },
  {
    content:
      'Did you know that you can rent the tents out for private events? I had my birthday party there with a fire pit and s`mores.',
    user_id: 2,
    post_id: 7,
  },
  {
    content: 'The best!!!!',
    user_id: 1,
    post_id: 8,
  },
  {
    content:
      'That view is breathtaking. Will definitely make trip to that bar.',
    user_id: 4,
    post_id: 9,
  },
  {
    content: 'WOW!',
    user_id: 3,
    post_id: 10,
  },
  {
    content: 'I love their poli papas.',
    user_id: 2,
    post_id: 11,
  },
  {
    content: 'Thanks for sharing! Will give it a try.',
    user_id: 1,
    post_id: 12,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
