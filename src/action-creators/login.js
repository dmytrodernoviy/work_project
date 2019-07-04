export const RESET_LOGIN_ERROR = "RESET_LOGIN_ERROR";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = formValues => {
  return { type: LOGIN_REQUEST, values: formValues };
};

export const loginSuccess = (userData, token) => {
  return { type: LOGIN_SUCCESS, userData, token };
};

export const loginFailure = error => {
  return { type: LOGIN_FAILURE, error };
};

export const resetError = () => ({ type: RESET_LOGIN_ERROR });
