const userData = [
  { id: 1, username: 'user1', email: 'user1@example.com' },
  { id: 2, username: 'user2', email: 'user2@example.com' },
];

function CreateUser(req, res, next) {
  // Create a new user
  const newUser = {
    id: userData.length + 1,
    username: req.body.username,
    email: req.body.email,
  };

  userData.push(newUser);

  res.status(201).json(newUser);
}

function ReadUser(req, res, next) {
  // Read a user by ID
  const userId = parseInt(req.params.userId);
  const user = userData.find((item) => item.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found.' });
  }
}

function UpdateUser(req, res, next) {
  // Update a user by ID
  const userId = parseInt(req.params.userId);
  const user = userData.find((item) => item.id === userId);

  if (user) {
    user.username = req.body.username;
    user.email = req.body.email;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found.' });
  }
}

function DeleteUser(req, res, next) {
  // Delete a user by ID
  const userId = parseInt(req.params.userId);
  const index = userData.findIndex((item) => item.id === userId);

  if (index !== -1) {
    const deletedUser = userData.splice(index, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'User not found.' });
  }
}

module.exports = {
  CreateUser,
  ReadUser,
  UpdateUser,
  DeleteUser,
};
