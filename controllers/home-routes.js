const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

//find all post
router.get('/', (req, res) => {
<<<<<<< HEAD
  Post.findAll({
    attributes: ['id', 'content_box', 'title', 'created_at'],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Comment,
        attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render('homepage', {
        posts,
        logged_in: req.session.logged_in,
=======
    Post.findAll({
        attributes: [
            'id',
            'content_box',
            'title',
            'category',
            'created_at',
            'image'
          ],
        order: [[ 'created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log(posts) // see if you have all of your data
      res.render('homepage', {
        posts: posts,
        logged_in: req.session.logged_in
>>>>>>> d140752638257ed76b314b9a4b76eba5dfa637be
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Find blog on homepage
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'content_box', 'title', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
<<<<<<< HEAD
      {
        model: Comment,
        attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
        include: {
=======
      attributes: [
        'id',
        'content_box',
        'title',
        'category',
        'created_at',
      ],
      include: [
        {
>>>>>>> d140752638257ed76b314b9a4b76eba5dfa637be
          model: User,
          attributes: ['username'],
        },
<<<<<<< HEAD
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const post = dbPostData.get({ plain: true });
      res.render('single-post', {
        post,
        logged_in: req.session.logged_in,
=======
        {
            model: Comment,
            attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
      ]
    })
      .then(dbPostData => {
       if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        const post = dbPostData.get({ plain: true });
        console.log(post);
        res.render('blog-post', {
            post: post,
            logged_in: req.session.logged_in
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
>>>>>>> d140752638257ed76b314b9a4b76eba5dfa637be
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
