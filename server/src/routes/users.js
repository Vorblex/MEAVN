const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');

// router.get('/', PostsController.get_posts);

router.post('/', UsersController.user_signup);
router.post('/signin', UsersController.user_login);

// router.get('/:id', PostsController.get_one_post);

// router.put('/:id', PostsController.update_post);

// router.delete('/:id', PostsController.remove_post);

module.exports = router;