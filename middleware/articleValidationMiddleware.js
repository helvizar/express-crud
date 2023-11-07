function validateArticle(req, res, next) {
  // Validate user data here
  const { id, title, content } = req.body;

  if (!id || !title || !content) {
    res.status(400).json({ message: "Invalid user data" });
  }

  next();
}

module.exports = { validateArticle };
