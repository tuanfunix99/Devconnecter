import { profileActions } from "../reducers/profileReducer";
import { loadProfile, createProfile } from "../api/data";

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

const profileAction = {
  getProfileUser,
  createProfileUser,
};

export default profileAction;
