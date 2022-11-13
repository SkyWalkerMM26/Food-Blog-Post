//Express is a back end web application framework for building RESTful APIs with Node.js
const express = require('express');
// require our controllers file that has the implementing codes.
const routes = require('./controllers');
//referring to protected mysql login info
const sequelize = require('./config/connection');
//The node:path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require('path');
// protects env mysql login info.
require('dotenv').config();
// requiring handlebars which is a templating engines for website applications.
const exphbs = require('express-handlebars');
//keeps track of user
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUnitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

//It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());
//It parses incoming JSON requests that comes from a form and puts the parsed data in req.body.
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


//synchronize your Sequelize model with your database tables.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});




