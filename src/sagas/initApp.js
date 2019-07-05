import { put, takeEvery, call } from "redux-saga/effects";
import { getTokenFromDB, setUserDataToDB } from "../services/dataBase";
import initAppAction, {
  INIT_SAGA,
  init,
  getProfileAction
} from "../action-creators/initApp";
import { setTokenToHeaders, getProfile } from "../services/restAPI";

function* initApp() {
  try {
    yield call(init);
    const token = yield call(getTokenFromDB);
    if (token) {
      yield put(initAppAction(token));
      setTokenToHeaders(token);
      const response = yield call(getProfile);
      yield put(getProfileAction(response.data));
      yield call(setUserDataToDB, response.data);
    }
  } catch (error) {}
}

export function* watchInitApp() {
  yield takeEvery(INIT_SAGA, initApp);
}
