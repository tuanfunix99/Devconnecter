//Dependencies
const Profile = require("../models/Profile");
const User = require("../models/User");
const ObjectId = require('mongodb').ObjectId;

//controller get profile user
exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id }).populate(
      "user",
      ["name", "avatar"]
    );
    if (!profile) {
      return res.status(200).send({});
    }
    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//controller get all profile
exports.getAllProfile = async (req, res, next) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.status(200).send(profiles);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

//controller post profile
exports.postProfile = async (req, res, next) => {
  // Get fields
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.company) profileFields.company = req.body.company;
  if (req.body.website) profileFields.website = req.body.website;
  if (req.body.location) profileFields.location = req.body.location;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if (req.body.status) profileFields.status = req.body.status;
  if (req.body.githubusername)
    profileFields.githubusername = req.body.githubusername;
  // Skills - Spilt into array
  if (typeof req.body.skills !== "undefined") {
    profileFields.skills = req.body.skills.split(",");
  }

  // Social
  profileFields.social = {};
  if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
  if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

  try {
    let profile = await Profile.findOne({ user: req.user._id }).populate(
      "user"
    );
    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user._id },
        { $set: { profileFields } }
      ).populate("user", ["name", "avatar"]);
      await profile.save();
      return res.status(201).send(profile);
    }

    profile = new Profile(profileFields);
    await profile.save();
    res.status(201).send(profile);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

//controller put experience
exports.putExperienceProfile = async (req, res, next) => {
  try {
    const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      };
    const profile = await Profile.findOne({ user: req.user._id });
    profile.experience.unshift(newExp);
    await profile.save();
    res.status(201).send(profile);
  } catch (error) {
    res.status(401).send(error.message);
  }
};


//controller put education
exports.putEducationProfile = async (req, res, next) => {
  try {
    const newEdu = {
      school: req.body.school,
      degree: req.body.degree,
      fieldofstudy: req.body.fieldofstudy,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description
    };
    const profile = await Profile.findOne({ user: req.user._id });
    profile.education.unshift(newEdu);
    await profile.save();
    res.status(201).send(profile);
  } catch (error) {
    res.status(401).send(error.message);
  }
};


//controller delete profile
exports.deleteProfile = async (req, res, next) => {
  try {
    //delete profile
    await Profile.findOneAndRemove({ user: req.user._id });
    //delete user
    await User.findOneAndRemove({ _id: req.user._id });

    res.status(200).send({ message: "Success" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//controller delete experience
exports.deleteExperience = async (req, res, next) => {
    const experienceId = req.params.id;
    try {
        const profile = await Profile.findOne({ user: req.user._id });
        profile.experience = profile.experience.filter(exp => exp._id != experienceId);
        await profile.save();
        res.status(200).send(profile);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

//controller delete education
exports.deleteEducation = async (req, res, next) => {
  const educationId = req.params.id;
  try {
      const profile = await Profile.findOne({ user: req.user._id });
      profile.education = profile.education.filter(exp => exp._id != educationId);
      await profile.save();
      res.status(200).send(profile);
  } catch (error) {
      res.status(401).send(error.message);
  }
}
