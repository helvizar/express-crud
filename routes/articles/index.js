const express = require('express');
const router = express.Router();

const ArticleController = require('../../controllers/articles');
const articleValidationMiddleware = require('../../middleware/articleValidationMiddleware');

router.post('/create', ArticleController.Create);

router.get('/:articleId', articleValidationMiddleware.validateArticle, ArticleController.Read);

router.put('/:articleId', ArticleController.Update);

router.delete('/:articleId', ArticleController.Delete);

module.exports = router;
