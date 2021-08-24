import { createSlice } from "@reduxjs/toolkit";

const auth = {
  user: null,
  token: "",
  isAuthenticated: false,
  createSucess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: auth,
  reducers: {
    registerSuccess: (state, action) => {
      localStorage.removeItem("token");
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: false,
        createSucess: true,
      };
    },
    login: (state, action) => {
      localStorage.removeItem("token");
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    },
    authFail: (state) => {
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: '',
        isAuthenticated: false,
      };
    },
    loadUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
