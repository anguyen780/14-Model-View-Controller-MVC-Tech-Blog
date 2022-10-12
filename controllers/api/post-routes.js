const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// /api/posts

router.post("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
        ...req.body
    })
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;