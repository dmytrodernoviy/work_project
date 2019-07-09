import { put, takeEvery, call } from "redux-saga/effects";
import SplashScreen from "react-native-splash-screen";
import {
  getTokenFromDB,
  setUserDataToDB,
  removeTokenFromDB
} from "../services/dataBase";
import {
  INIT_SAGA,
  init,
  getProfileAction,
  tokenError,
  initAppAction
} from "../action-creators/initApp";
import { setTokenToHeaders, getProfile } from "../services/restAPI";

function* initApp() {
  try {
    yield call(init);
    const token = yield call(getTokenFromDB);
    if (token) {
      setTokenToHeaders(token);
      const response = yield call(getProfile);
      if (response.status === 401) {
        yield call(tokenError);
        yield call(removeTokenFromDB);
        SplashScreen.hide();
      } else {
        yield put(initAppAction(token));
        yield put(getProfileAction(response.data));
        yield call(setUserDataToDB, response.data);
        SplashScreen.hide();
      }
    }
  } catch (error) {}
}

export function* watchInitApp() {
  yield takeEvery(INIT_SAGA, initApp);
}
