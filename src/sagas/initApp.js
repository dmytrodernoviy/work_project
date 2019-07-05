import { put, takeEvery, call } from "redux-saga/effects";
import { getTokenFromDB } from "../services/dataBase";
import initAppAction, { INIT_SAGA, init } from "../action-creators/initApp";
import { setTokenToHeaders } from "../services/restAPI";

function* initApp() {
  try {
    yield call(init);
    const token = yield call(getTokenFromDB);
    if(token) {
      yield put(initAppAction(token));
      setTokenToHeaders(token)
    }
    
  } catch (error) {}
}

export function* watchInitApp() {
  yield takeEvery(INIT_SAGA, initApp);
}
