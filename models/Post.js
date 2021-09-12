//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("express-validator");

//create postSchema
const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
      validate(value){
        if (validator.isEmpty(value)) {
          throw new Error("text is required");
        }
      },
    },
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        text: {
          type: String,
          required: true,
          validate(value){
            if (validator.isEmpty(value)) {
              throw new Error("text is required");
            }
          },
        },
        name: {
          type: String,
        },
        avatar: {
          type: String,
        },
        createdAt:{
            type: Date,
            default: new Date()
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

//export the module
module.exports = Post;
