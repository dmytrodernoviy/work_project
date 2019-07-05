import * as typesLogin from "../action-creators/login";
import * as typesRegister from "../action-creators/register";
import { INIT_APP } from "../action-creators/initApp";

const initialState = {
  loading: false,
  token: null,
  userData: {},
  errorLogin: null,
  errorRegister: null
};

export default function authorization(state = initialState, action) {
  switch (action.type) {
    case typesLogin.LOGIN_REQUEST:
      return { ...state, loading: true };
    case typesLogin.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
        userData: action.userData,
        errorLogin: null,
        errorRegister: null
      };
    case typesLogin.LOGIN_FAILURE:
      return { ...state, loading: false, errorLogin: action.error };
    case typesRegister.REGISTER_REQUEST:
      return { ...state, loading: true };
    case typesRegister.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
        userData: action.userData,
        errorLogin: null,
        errorRegister: null
      };
    case typesRegister.REGISTER_ERROR:
      return { ...state, loading: false, errorRegister: action.error };
    case INIT_APP:
      return { ...state, token: action.token };
    case typesLogin.LOGOUT:
      return { ...state, token: null };
    case typesLogin.RESET_LOGIN_ERROR:
      return { ...state, errorLogin: null, errorRegister: null };
    default:
      return state;
  }
}
