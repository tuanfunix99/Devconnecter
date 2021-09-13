import { createSlice } from "@reduxjs/toolkit";

const profileState = {
  profile: null,
  isProfile: false,
  profiles: [],
  singleProfile: null
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profileState,
  reducers: {
    getAllProfile: (state, action) => {
      return {
        ...state,
        profiles: action.payload
      };
    },
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
    getSingleProfile: (state, action) => {
      return {
        ...state,
        singleProfile: action.payload,
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
