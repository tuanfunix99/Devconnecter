//Dependencies
const User = require("../models/User");
const { validationResult } = require("express-validator");
const { removeImage } = require("../utils/DeleteImage");
const { getPathImages } = require("../utils/PathImage");

//controller get user
exports.getUser = (req, res, next) => {
  res.send(req.user);
};

//controller login
exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.matchPassword(req.body.email, req.body.password);

    //check verify
    if (!user.verify) {
      throw new Error(
        "you not verify your email, please check your email and verify"
      );
    }

    //check token
    if (user.tokens.length <= 0) {
      const token = await user.setToken();
      return res.status(200).send({ token: token });
    }

    res.status(200).send({ token: user.tokens[0].token });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

//controller logout
exports.logout = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).send({ message: "user not exist" });
    }

    user.tokens = [];
    await user.save();
    res.redirect("/");
  } catch (error) {
    res.status(401).send(error.message);
  }
};

//controller upload avatar
exports.uploadAvatar = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error("File not exist");
    }
    if (req.file.size > 2000000) {
      removeImage(req.file.filename);
      throw new Error("File size <= 2mb");
    }
    removeImage(req.user.avatar);
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: { avatar: req.file.filename } }
    );
    res.status(200).send({ message: "ok" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//controller get avatar
exports.getAvatar = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return;
    }
    if (user.avatar.length <= 0) {
      const imageUrl = "images/" + "icon-default.png";
      res.sendFile(getPathImages(imageUrl));
    } else {
      const imageUrl = "images/" + user.avatar;
      res.sendFile(getPathImages(imageUrl));
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};
