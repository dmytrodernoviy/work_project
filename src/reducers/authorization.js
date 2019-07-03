import * as types from "../action-creators/login"

const initialState = {
  loading: false,
  isLogin: false,
  userData: {},
  error: false
};

export default function authorization(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        userData: action.userData,
        error: false
      };
    case "LOGIN_FAILURE":
      return { ...state, loading: false, error: action.error };
    case types.RESET_LOGIN_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
}
