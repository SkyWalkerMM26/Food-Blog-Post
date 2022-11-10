const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

//get api/posts/ (all posts)
router.get('/', (req,res) => {
    Post.findAll({
        //from post model. 
        attributes: [
            'id',
            'content_box',
            'title',
            'create_at',
          ],
          //order the post from most recent to least
        order: [['created_at', 'DESC']],
        // The post should have username from User model.
        // Include all comments.
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'content', 'user_id','post_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    //return the posts
    .then(dbPostData => res.json(dbPostData))
    // if there were server error, return error.
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            //id which is from the values parsed from the URL path.
            id: req.params.id
        },
        attributes: ['id','title', 'content_box', 'references','user_id', 'created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: ' No post found with this id'});
        }
    })

    })
})

   
