export const INIT_APP = "INIT_APP";
export const INIT_SAGA = "INIT_SAGA";

export const init = () => ({
  type: INIT_SAGA
});

export const initAppAction = token => ({
  type: INIT_APP,
  token
});

export default initAppAction;
