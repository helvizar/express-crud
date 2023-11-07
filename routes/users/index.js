const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/users');
const userValidationMiddleware = require('../../middleware/userValidationMiddleware');

router.post('/create', userValidationMiddleware.validateUser, UserController.CreateUser);

router.get('/:userId', UserController.ReadUser);

router.put('/:userId', UserController.UpdateUser);

router.delete('/:userId', UserController.DeleteUser);

module.exports = router;
