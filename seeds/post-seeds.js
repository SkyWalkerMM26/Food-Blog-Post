const { Post } = require('../models');

const postData = [
    {
        title: 'What Diet?',
        category: 'Korean',
        content_box: 'Kogi Gogi is a must have if you ever visit the inner sunset district in San Francisco! It`s a bit pricey for all you can eat (around $38 dollars per person), but definitely worth it if you come with an empty stomach. The service is fast, and they are very generous with their portions. The corn cheese is a must!',
        image: 'https://i.postimg.cc/W4tsp5yX/kbbq.png',
        user_id: 3
    },
    {
        title: 'Damn Delicious',
        category: 'Thai',
        content_box: 'This is res is offering amazing food',
        image: 'https://i.postimg.cc/tg9X0XdQ/mitchells.jpg',
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