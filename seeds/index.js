const sequelize = require('../config/connections');

const seedUser = require('./user-data');
const seedPost = require('./post-data');
const seedComment = require('./comment-data');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComment();

  process.exit(0);
};

seedAll();