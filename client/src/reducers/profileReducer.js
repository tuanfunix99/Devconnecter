

import { createSlice } from '@reduxjs/toolkit';

const profileState = {
    profile:{}
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileState,
    reducers: {
        getprofile: (state, action) => {
            return {
                ...state,
                profile: action.payload,
            }
        },
        createProfile: (state, action) => {
            return {
                ...state,
                profile: action.payload,
            }
        }
    }
})

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;