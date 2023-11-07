function validateUser(req, res, next) {
  // Validate user data here
  const { id, username, email } = req.body;

  if (!id || !username || !email) {
    res.status(400).json({ message: "Invalid user data" });
  }

  next();
}

module.exports = { validateUser };
