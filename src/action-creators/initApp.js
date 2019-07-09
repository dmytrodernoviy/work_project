export const INIT_APP = "INIT_APP";
export const INIT_SAGA = "INIT_SAGA";
export const GET_PROFILE = "GET_PROFILE";
export const TOKEN_ERROR = "TOKEN_ERROR";

export const init = () => ({
  type: INIT_SAGA
});

export const initAppAction = data => ({
  type: INIT_APP,
  data
});

export const getProfileAction = data => ({
  type: GET_PROFILE,
  data
});

export const tokenError = () => ({
  type: TOKEN_ERROR
});
