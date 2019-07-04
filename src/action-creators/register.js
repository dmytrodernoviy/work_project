export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const registerRequest = formValues => {
  return { type: REGISTER_REQUEST, values: formValues };
};

export const registerSuccess = (userData, token) => {
  return { type: REGISTER_SUCCESS, userData, token };
};

export const registerError = error => {
  return { type: REGISTER_ERROR, error };
};
