const articleData = [
  { id: 1, title: 'Article 1', content: 'This is article 1' },
  { id: 2, title: 'Article 2', content: 'This is article 2' },
];

function Create(req, res, next) {
  // Create a new article
  const newArticle = {
    id: articleData.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  articleData.push(newArticle);

  res.status(201).json(newArticle);
}

function Read(req, res, next) {
  // Read an article by ID
  const articleId = parseInt(req.params.articleId);
  const article = articleData.find((item) => item.id === articleId);

  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: 'Article not found.' });
  }
}

function Update(req, res, next) {
  // Update an article by ID
  const articleId = parseInt(req.params.articleId);
  const article = articleData.find((item) => item.id === articleId);

  if (article) {
    article.title = req.body.title;
    article.content = req.body.content;
    res.json(article);
  } else {
    res.status(404).json({ message: 'Article not found.' });
  }
}

function Delete(req, res, next) {
  // Delete an article by ID
  const articleId = parseInt(req.params.articleId);
  const index = articleData.findIndex((item) => item.id === articleId);

  if (index !== -1) {
    const deletedArticle = articleData.splice(index, 1);
    res.json(deletedArticle[0]);
  } else {
    res.status(404).json({ message: 'Article not found.' });
  }
}

module.exports = {
  Create,
  Read,
  Update,
  Delete,
};
