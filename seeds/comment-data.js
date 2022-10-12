const { Comment } = require('../models');

const commentData = [
    {
        "body": "testing comment",
        "postId": 1,
        "userId": 1
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;