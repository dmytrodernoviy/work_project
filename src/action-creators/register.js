export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const registerRequest = data => ({
  type: REGISTER_REQUEST,
  data
});

export const registerSuccess = (userData, token) => ({
  type: REGISTER_SUCCESS,
  userData,
  token
});

export const registerError = data => ({
  type: REGISTER_ERROR,
  data
});
