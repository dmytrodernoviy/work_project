import { put, takeEvery, call } from "redux-saga/effects";
import { getTokenFromDB } from "../services/dataBase";
import initAppAction, { INIT_SAGA, init } from "../action-creators/initApp";

function* initApp() {
  try {
    yield call(init);
    const token = yield call(getTokenFromDB);
    yield put(initAppAction(token));
  } catch (error) {}
}

export function* watchInitApp() {
  yield takeEvery(INIT_SAGA, initApp);
}
