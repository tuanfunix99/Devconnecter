//Dependencies
const User = require("../models/User");
const nodemailer = require("nodemailer");
const keys = require("../config/keys");
const TokenVerify = require("../utils/TokenVerify");
const templateVerify = require("../services/templateVerify");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "minggu220399@gmail.com", // generated ethereal user
    pass: "jgprkdwwgdplxvyi", // generated ethereal password
  },
});

//controller create new user
exports.postUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const tokenVerify = TokenVerify();
    user.verifyToken = tokenVerify;
    await user.save();
    const token = await user.setToken();
    await transporter.sendMail({
      from: "Admin minggu 👻", // sender address
      to: user.email, // list of receivers
      subject: "Token Verify", // Subject line
      text: "Please click the link below to verify your email", // plain text body
      html: templateVerify(
        keys.root_domain + "/api/user/" + tokenVerify + "/" + user._id
      ), // html body
    });
    res.status(201).send({ token: token });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//controller verify email
exports.verifyEmail = async (req, res, next) => {
  const userId = req.params.id;
  const token = req.params.token;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).send({ message: "user not exist" });
    }
    if (user.verifyToken !== token) {
      return res.status(401).send({ message: "Verify token not match" });
    }
    user.verify = true;
    user.verifyToken = "";
    await user.save();
    res.redirect("/login");
  } catch (error) {
    return res.status(401).send(error.message);
  }
};
