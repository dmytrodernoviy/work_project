export const INIT_APP = "INIT_APP";
export const INIT_SAGA = "INIT_SAGA";
export const GET_PROFILE = "GET_PROFILE";

export const init = () => ({
  type: INIT_SAGA
});

export const initAppAction = token => ({
  type: INIT_APP,
  token
});

export const getProfileAction = data => ({
  type: GET_PROFILE,
  payload: data
});

export default initAppAction;
