import { create } from "apisauce";

const API_URL = "http://light-it-04.tk/api/";

const api = create({
    baseURL: API_URL
});

export const registerRequest = data => api.post("registration/", data);
export const loginRequest = data => api.post("login/", data);