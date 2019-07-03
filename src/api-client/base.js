import axios from "axios";

const API_URL = "http://light-it-04.tk/api/";

const mainRequest = (method, path, data) => {
  return axios({
    method,
    url: `${API_URL}${path}`,
    data
  });
};

const authorizeRequest = (method, path, data, token) =>
  axios({
    method,
    url: `${API_URL}${path}`,
    data,
    headers: {
      "Content-Type": "application/json",
      Authorization: "JWT " + token
    }
  });

export const get = (path, data) => mainRequest("GET", path, data);
export const post = (path, data) => mainRequest("POST", path, data);
