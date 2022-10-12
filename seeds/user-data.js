const { User } = require('../models');

const userData = [
    {
      "username": "Test123",
      "password": "Test123"
    }
  ]

  const seedUser = () => User.bulkCreate(userData);

  module.exports = seedUser;  