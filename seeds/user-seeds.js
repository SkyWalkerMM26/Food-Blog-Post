const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'rebeccao',
        email: 'rebeccao@mail.com',
        password: 'password123'
    },
    {
        username: 'mouam',
        email: 'mouam@mail.com',
        password: 'password123'
    },
    {
        username: 'yingl',
        email: 'yingl@mail.com',
        password: 'password123'
    },
    {
        username: 'alexisz',
        email: 'alexisz@mail.com',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userData, { individualtHooks: true });
module.exports = seedUsers;

