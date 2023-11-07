const express = require('express');
const router = express.Router();

const UserRoutes = require('./users/index');
const ArticleRoutes = require('./articles/index');

// Default route
router.get('/', (req, res, next) => {
  res.send('Welcome to api routes!');
});

router.use('/users', UserRoutes);

router.use('/articles', ArticleRoutes);

module.exports = router;
