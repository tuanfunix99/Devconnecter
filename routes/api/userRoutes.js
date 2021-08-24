

//Dependencies
const express = require('express');
const userControllers = require('../../controllers/userControllers');

//Instantiate router
const router = express.Router();

//router post user
router.post('/',userControllers.postUser);

//router verify email
router.get('/:token/:id',userControllers.verifyEmail);

//export the module
module.exports = router;