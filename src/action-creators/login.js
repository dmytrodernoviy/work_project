export const RESET_LOGIN_ERROR = "RESET_LOGIN_ERROR";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginRequest = data => ({
  type: LOGIN_REQUEST,
  data
});

export const loginSuccess = (userData, token) => ({
  type: LOGIN_SUCCESS,
  userData,
  token
});

export const loginFailure = data => ({
  type: LOGIN_FAILURE,
  data
});

export const resetError = () => ({ type: RESET_LOGIN_ERROR });

export const logOut = () => ({ type: LOGOUT });
