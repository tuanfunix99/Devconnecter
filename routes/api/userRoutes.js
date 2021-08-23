

//Dependencies
const express = require('express');
const userControllers = require('../../controllers/userControllers');

//Instantiate router
const router = express.Router();

//router post user
router.post('/',userControllers.postUser);

//export the module
module.exports = router;