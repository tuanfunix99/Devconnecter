

//Dependencies
const express = require('express');
const profileControllers = require('../../controllers/profileControllers');
const auth = require('../../middleware/auth');

//Instantiate router
const router = express.Router();

//router get profile
router.get('/user', auth, profileControllers.getProfile);

//router get all profile
router.get('/', auth, profileControllers.getAllProfile);

//router create new profile
router.post('/', auth, profileControllers.postProfile);

//router add experience
router.put('/experience', auth, profileControllers.putExperienceProfile);

//router add education
router.put('/education', auth, profileControllers.putEducationProfile);

//router delete profile
router.delete('/', auth, profileControllers.deleteProfile);

//router delete experience
router.delete('/experience/:id', auth, profileControllers.deleteExperience);

//router delete experience
router.delete('/education/:id', auth, profileControllers.deleteEducation);

//export the module
module.exports = router;