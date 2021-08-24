//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

//create userSchema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validator: (value) => {
        if (validator.isEmpty(value)) {
          throw new Error("name is required");
        }
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validator: (value) => {
        if (validator.isEmpty(value)) {
          throw new Error("email is required");
        } else if (!validator.isEmail(value)) {
          throw new Error("email is valid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      min: [6, "Please enter password with 6 characters or more"],
      validator: (value) => {
        if (validator.isEmpty(value)) {
          throw new Error("password is required");
        }
      },
    },
    avatar: {
      type: String,
    },
    tokens: [
      {
        token: {
          type: String,
        },
        createdAt: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

//match password
userSchema.statics.matchPassword = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login, email not exist");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login, password not match");
  }
  return user;
};

//render to json
userSchema.methods.toJSON = function () {
  const user = this;
  const userJson = user.toObject();
  delete userJson.tokens;
  delete userJson.password;
  return userJson;
};

//set avatar
userSchema.pre("save", function (next) {
  const user = this;
  const avatar = gravatar.url(user.email, {
    s: "200",
    r: "pg",
    d: "mm",
  });
  user.avatar = avatar;
  next();
});

//crypto password
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//set tokens
userSchema.methods.setToken = async function () {
  const user = this;
  const token = await jwt.sign({ user_id: user._id }, keys.privateJwt);
  user.tokens = user.tokens.concat({ token, createdAt: new Date().getTime() });
  await user.save();
  return token;
};

const User = mongoose.model("User", userSchema);

//export the module
module.exports = User;
