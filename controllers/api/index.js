const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");
const imageRoutes = require("./image-upload");

router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);
router.use("images", imageRoutes);

module.exports = router;
