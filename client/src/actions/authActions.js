import { authActions } from "../reducers/authReducer";
import { register, loadUser, loginApi, uploadAvatar } from "../api/data";
import setAuthToken from "../utils/setAuthToken";

const createUser = ({ name, email, password}) => async (dispatch) => {
  const user = {name, email, password};
  try {
    const { data } = await register(user);
    return dispatch(authActions.registerSuccess(data));
  } catch (e) {
    authActions.authFail();
    if(e.response && e.response.data){
      alert(e.response.data);
    }
  }
};

const fetchUser = () => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const { data } = await loadUser();
    return dispatch(authActions.loadUser(data));
  } catch (error) {
    authActions.authFail();
  }
}


const login = ({ email, password }) => async (dispatch) => {
  const user = {email, password};
  try {
    const { data } = await loginApi(user);
    return dispatch(authActions.login(data));
  } catch (e) {
    authActions.authFail();
    if(e.response && e.response.data){
      alert(e.response.data);
    }
  }
};

const uploadAva = (file) => async dispatch => {
  try {
    await uploadAvatar(file);
    return dispatch(authActions.uploadAvatar());
  } catch (e) {
    authActions.authFail();
    if(e.response && e.response.data){
      alert(e.response.data);
    }
  }
}

const authAction = {
  createUser,
  fetchUser,
  login,
  uploadAva
};
export default authAction;
