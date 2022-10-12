const { Post } = require('../models');
const postData = [
    {
      "title": "Test Post",
      "body": "Testing",
      "userId": 1
    }
  ]
const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost;