

//Dependencies
const express = require('express');
const authControllers = require('../../controllers/authControllers');
const auth = require('../../middleware/auth');
const { body } = require('express-validator');

//Instantiate router
const router = express.Router();


//router get auth
router.get('/', auth, authControllers.getUser);

//router login
router.post('/', 
body('email', 'email is not valid').isEmail(),
body('password', 'Please enter password with 6 characters or more').isLength({ min: 5 }),
authControllers.login);

//router logout
router.get('/logout/:id', authControllers.logout);

//export the module
module.exports = router;