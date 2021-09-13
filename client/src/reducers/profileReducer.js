import { createSlice } from "@reduxjs/toolkit";

const profileState = {
  profile: {},
  isProfile: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profileState,
  reducers: {
    getprofile: (state, action) => {
      let checkprofile = false;
      if (action.payload.skills.length > 0) {
        checkprofile = true;
      }
      return {
        ...state,
        profile: action.payload,
        isProfile: checkprofile,
      };
    },
    createProfile: (state, action) => {
      return {
        ...state,
        profile: action.payload,
        isProfile: true,
      };
    },
    addExperience: (state, action) => {
      return {
        ...state,
        profile: action.payload,
        isProfile: true,
      };
    },
    addEducation: (state, action) => {
      return {
        ...state,
        profile: action.payload,
        isProfile: true,
      };
    },
    deleteExperience: (state, action) => {
      return {
        ...state,
        profile: action.payload,
        isProfile: true,
      };
    },
    deleteEducation: (state, action) => {
      return {
        ...state,
        profile: action.payload,
        isProfile: true,
      };
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
