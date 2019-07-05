import { create } from "apisauce";

const API_URL = "http://light-it-04.tk/api/";

const api = create({
  baseURL: API_URL
});

export const setTokenToHeaders = token =>
  api.setHeaders({
    "Content-Type": "application/json",
    Authorization: `JWT ${token}`
  });

export const registerRequest = data => api.post("registration/", data);
export const loginRequest = data => api.post("login/", data);
export const getItems = () => api.get("posters/");
export const getProfile = () => api.get("profile/");
