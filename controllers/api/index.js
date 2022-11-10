const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;