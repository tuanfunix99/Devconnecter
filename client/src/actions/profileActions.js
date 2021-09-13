import { profileActions } from "../reducers/profileReducer";
import {
  loadProfile,
  createProfile,
  addExperienceProfile,
  addEducationProfile,
  deletExperienceProfile,
  deleteEducationProfile
} from "../api/data";

const getProfileUser = () => async (dispatch) => {
  try {
    const { data } = await loadProfile();
    return dispatch(profileActions.getprofile(data));
  } catch (e) {
    if (e.response && e.response.data) {
      alert(e.response.data);
    }
  }
};

const createProfileUser = (profile) => async (dispatch) => {
  try {
    const { data } = await createProfile(profile);
    return dispatch(profileActions.createProfile(data));
  } catch (e) {
    if (e.response && e.response.data) {
      alert(e.response.data);
    }
  }
};

const addExperience = (exp) => async (dispatch) => {
  try {
    const { data } = await addExperienceProfile(exp);
    return dispatch(profileActions.addExperience(data));
  } catch (e) {
    if (e.response && e.response.data) {
      alert(e.response.data);
    }
  }
};

const addEducation = (edu) => async (dispatch) => {
  try {
    const { data } = await addEducationProfile(edu);
    return dispatch(profileActions.addExperience(data));
  } catch (e) {
    if (e.response && e.response.data) {
      alert(e.response.data);
    }
  }
};

const deleteExperience = (expId) => async (dispatch) => {
  try {
    const { data } = await deletExperienceProfile(expId);
    return dispatch(profileActions.addExperience(data));
  } catch (e) {
    if (e.response && e.response.data) {
      alert(e.response.data);
    }
  }
};

const deleteEducation = (eduId) => async (dispatch) => {
  try {
    const { data } = await deleteEducationProfile(eduId);
    return dispatch(profileActions.deleteEducation(data));
  } catch (e) {
    if (e.response && e.response.data) {
      alert(e.response.data);
    }
  }
};


const profileAction = {
  getProfileUser,
  createProfileUser,
  addExperience,
  addEducation,
  deleteExperience,
  deleteEducation
};

export default profileAction;
