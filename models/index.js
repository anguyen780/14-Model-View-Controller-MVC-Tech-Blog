const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'userId'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId'
});

User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

module.exports = {
  User,
  Comment,
  Post
};