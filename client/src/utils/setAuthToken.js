import axios from "axios";

export const setAuthtoken = (token) => {
  if (token) {
    axios.defaults.headers.common["auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["auth-token"];
  }
};

export default setAuthtoken;
