//Dependencies
const User = require("../models/User");
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.header("auth-token");

  //verify token
  try {
    //check if not token
    if (!token) {
      throw new Error("token not exist");
    }

    const userToken = await jwt.verify(token, keys.privateJwt);
    const user = await User.findById(userToken.user_id);

    //check user
    if (!user) {
      throw new Error("user not exist");
    }

    //check verify email
    if (!user.verify) {
      throw new Error(
        "you not verify your email, please check your email and verify"
      );
    }

    const tokenVerify = user.tokens.filter((tk) => tk.token === token);
    const now = new Date().getTime();
    const exp = 24 * 60 * 60 * 1000;

    //check expires
    if(tokenVerify[0].createdAt){
      if (tokenVerify == [] || tokenVerify[0].createdAt + exp - now <= 0) {
        user.tokens = user.tokens.filter((tk) => tk.token !== token);
        await user.save();
        throw new Error("token may be not exist or expires please login again");
      }
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    return res.status(401).send(error.message);
  }
};
