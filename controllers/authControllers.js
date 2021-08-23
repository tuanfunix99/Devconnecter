//Dependencies
const User = require("../models/User");
const { validationResult } = require("express-validator");

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

    if(!user){
      return res.status(401).send({ message: "user not exist"});
    }

    user.tokens = [];
    await user.save();
    res.redirect('/');
  } catch (error) {
    res.status(401).send(error.message);
  }
};
