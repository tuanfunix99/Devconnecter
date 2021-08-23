//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("express-validator");

//create profileSchema
const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    handle: {
      type: String,
      // required: true,
      max: 40,
    },
    company: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      validator: (value) => {
        if (validator.isEmpty(value)) {
          throw new Error("status is required");
        }
      },
    },
    skills: {
      type: [String],
      required: true,
      validator: (value) => {
        if (validator.isEmpty(value)) {
          throw new Error("skills is required");
        }
      },
    },
    bio: {
      type: String,
    },
    githubusername: {
      type: String,
    },
    experience: [
      {
        title: {
          type: String,
          required: true,
          validator: (value) => {
            if (validator.isEmpty(value)) {
              throw new Error("title is required");
            }
          },
        },
        company: {
          type: String,
          required: true,
          validator: (value) => {
            if (validator.isEmpty(value)) {
              throw new Error("company is required");
            }
          },
        },
        location: {
          type: String,
        },
        from: {
          type: Date,
          required: true,
          validator: (value) => {
            if (validator.isEmpty(value)) {
              throw new Error("from is required");
            }
          },
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
        },
      },
    ],
    education: [
      {
        school: {
          type: String,
          required: true,
        },
        degree: {
          type: String,
          required: true,
        },
        fieldofstudy: {
          type: String,
          required: true,
        },
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
        },
      },
    ],
    social: {
      youtube: {
        type: String,
      },
      twitter: {
        type: String,
      },
      facebook: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      instagram: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

//export the module
module.exports = Profile;
