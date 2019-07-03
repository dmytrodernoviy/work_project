export const RESET_LOGIN_ERROR = "RESET_LOGIN_ERROR"

export const loginRequest = formValues => {
  return { type: "LOGIN_REQUEST", values: formValues };
};

export const loginSuccess = userData => {
  return { type: "LOGIN_SUCCESS", userData };
};

export const loginFailure = error => {
  return { type: "LOGIN_FAILURE", error };
};

export const resetError = () => ({ type: RESET_LOGIN_ERROR });
