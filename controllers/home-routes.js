const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        { model: User },
      ],
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.render('all-posts', {
      posts
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get('/post/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the post
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            include: [User]
          }
        ],
      });
      const post = postData.get({ plain: true });
      res.render('single-post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/dashboard', withAuth, async (req, res) =>{
  try{
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Post
        },
      ],
    });
    const user = userData.get({ plain: true });
    res.render('./layouts/dashboard', { user, loggedIn: req.session.loggedIn });
  }catch (err){
    res.status(500).json(err);
  }
})

router.get('/dashboard/new', (req, res) => {
  res.render('new-post', {loggedIn: req.session.loggedIn})
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('./layouts/dashboard');
    return;
  } else {
    res.render('signup')
  }
})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('./layouts/dashboard');
    return;
  } else {
    res.render('login');
  }
});

module.exports = router;
