import axios from "axios";

export const register = (user) => axios.post("/api/user", user);

export const loginApi = (user) => axios.post("/api/auth", user);

export const loadUser = () => axios.get("/api/auth");

export const loadProfile = () => axios.get("/api/profile/user");

export const createProfile = (profile) => axios.post("/api/profile/", profile);

export const addExperienceProfile = (experience) =>
  axios.put("/api/profile/experience", experience);

export const addEducationProfile = (education) =>
  axios.put("/api/profile/education", education);

export const deletExperienceProfile = (experienceId) =>
  axios.delete(`/api/profile/experience/${experienceId}`);

export const deleteEducationProfile = (educationId) =>
  axios.delete(`/api/profile/education/${educationId}`);
