const { Post } = require('../models');

const postData = [
    {
        title: 'What Diet?',
        category: 'Korean',
        date_created: '11/13/2022',
        content_box: 'Kogi Gogi is a must have if you ever visit the inner sunset district in San Francisco! It`s a bit pricey for all you can eat (around $38 dollars per person), but definitely worth it if you come with an empty stomach. The service is fast, and they are very generous with their portions. The corn cheese is a must!',
        image: 'https://i.postimg.cc/W4tsp5yX/kbbq.png',
        user_id: 3
    },
    {
        title: 'Damn Delicious',
        category: 'Dessert',
        date_created: '11/13/2022',
        content_box: 'A San Francisco classic! The banana splits are delicious, but too big for just one person. I love trying new flavors every time I visit. Just be prepared for the long wait in the chilly weather.',
        image: 'https://i.postimg.cc/tg9X0XdQ/mitchells.jpg',
        user_id: 1
    },
    {
        title: 'Wow, Yum',
        category: 'Dessert',
        date_created: '11/13/2022',
        content_box: 'My favorite after dinner treat.',
        image: 'https://i.postimg.cc/9FTkD8pP/boba.jpg',
        user_id: 2
    },
    {
        title: 'For the adventurous foodies..',
        category: 'Indian',
        date_created: '11/13/2022',
        content_box: 'Indian food is not for everyone. The spices might be overwhelming to some. I think that Noori is a good introduction to the cuisine for those that are not too familiar. The portions are fairly small, however this allows you to try many different things. The paneer tikka masala is a great vegetarian alternative and one of my favorites.',
        image: 'https://i.postimg.cc/1z6X2Zcn/indian.jpg',
        user_id: 4
    },
    {
        title: 'IYKYK',
        category: 'Italian',
        date_created: '11/13/2022',
        content_box: 'BLT with avocado on dutch crunch, please!',
        image: 'https://i.postimg.cc/BnRc24nX/little.jpg',
        user_id: 3
    },
    {
        title: 'Speechless',
        category: 'Italian',
        date_created: '11/13/2022',
        content_box: 'I recently visited Boston for the first time and made a trip to Little Italy in North End. I had heard a lot about a restaurant called Trattoria Il Panino and decided to give it a try. It did not disappoint! I had glass of wine paired with their lobster ravioli with crab meat sauce and it was delicious. One of my favorite meals that I have had in a long time. This restaurant will definitely be my go-to whenever I return to Boston.',
        image: 'https://i.postimg.cc/MT5Q3Sq0/pasta.jpg',
        user_id: 2
    },
    {
        title: 'The Spot',
        category: 'Other',
        date_created: '11/13/2022',
        content_box: 'Spark Social SF is my favorite place to invite friends and hangout. It is a lot easier to enjoy during the summer when the weather is a bit warmer. Every day they feature new food trucks which is perfect for someone who loves to try new restaurants. I always have such a fun time eating and enjoying the outdoors in the heart of SF.',
        image: 'https://i.postimg.cc/dQ7CmggC/spark.png',
        user_id: 3
    },
    {
        title: 'A taste of central america',
        category: 'Other',
        date_created: '11/13/2022',
        content_box: 'The best place for authentic pupusas in the Bay Area.',
        image: 'https://i.postimg.cc/X7WQHwd4/balompie.jpg',
        user_id: 4
    },
    {
        title: 'Drinks with a view',
        category: 'Other',
        date_created: '11/13/2022',
        content_box: 'The perfect happy hour spot! Enjoy drinks and dessert with an incredible view of the SF skyline.',
        image: 'https://i.postimg.cc/2SKpNb83/view.jpg',
        user_id: 1
    },
    {
        title: 'What dreams are made of',
        category: 'American',
        date_created: '11/13/2022',
        content_box: 'This brioche french toast with marscapone filling is my guilty pleasure. It is very rich so it really is a great treat to have every once in a while.',
        image: 'https://i.postimg.cc/NFk7qzmY/kitchen.jpg',
        user_id: 2
    },
    {
        title: 'MMMMMM',
        category: 'Spanish',
        date_created: '11/13/2022',
        content_box: 'The BEST mid-afternoon snack. Limón`s ceviche trio is always a good idea. Don`t forget to add a side of their yuca fries!',
        image: 'https://i.postimg.cc/NMMwr3GC/limon.jpg',
        user_id: 4
    },
    {
        title: 'Guilt-free and Tasty!',
        category: 'Greek',
        date_created: '11/13/2022',
        content_box: 'Souvla is my favorite after-gym meal. It is light, and the ingredients are always fresh.',
        image: 'https://i.postimg.cc/0jydvCfw/souvla.jpg',
        user_id: 3
    },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;