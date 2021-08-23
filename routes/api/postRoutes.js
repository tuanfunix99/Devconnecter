

//Dependencies
const express = require('express');
const postControllers = require('../../controllers/postControllers');
const auth = require('../../middleware/auth');

//Instantiate router
const router = express.Router();

//router get all post
router.get('/', auth, postControllers.getAllPost);

//router get post
router.get('/:id', auth, postControllers.getPost);

//router create new post
router.post('/', auth, postControllers.addPost);

//router create new comment
router.post('/comment', auth, postControllers.addPost);

//router put like
router.put('/like/:id', auth, postControllers.putLike);

//router delete post
router.delete('/:id', auth, postControllers.deletePost);

//export the module
module.exports = router;