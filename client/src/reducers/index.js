

import { combineReducers } from 'redux';
import auth from './authReducer';
import profile from './profileReducer';

const reducers = combineReducers({
    auth,
    profile
})

export default reducers;