const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const blogPostRoutes = require('./blogPostRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/blog-post', blogPostRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
