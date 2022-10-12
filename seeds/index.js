const sequelize = require('../config/connections');
const { User, Post, Comment } = require('../models');

const postData = require('./post-data.json');
// const commentData = require('./comment-data.json');
const userData = require('./user-data.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedAll();