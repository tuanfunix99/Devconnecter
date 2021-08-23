

import { profileActions } from '../reducers/profileReducer';
import { loadProfile, createProfile } from '../api/data';


const getProfileUser = () => async dispatch => {
    try {
        const { data } = await loadProfile();
        return dispatch(profileActions.getprofile(data));
    }catch (error) {
        console.log(error);
    }
}

const createProfileUser = (profile) => async dispatch => {
    try {
        const { data } = await createProfile(profile);
        return dispatch(profileActions.createProfile(data));
    }catch (error) {
        console.log(error);
    }
}

const profileAction = {
    getProfileUser,
    createProfileUser,
}

export default profileAction;