const router = require("express").Router();
const { Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll();

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
    try{
        const commentData = await Comment.findOne({
            where: {id: req.params.id}
        })
        res.status(200).json(commentData)
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;