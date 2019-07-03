import { put, takeEvery, call } from "redux-saga/effects";
import { loginRequest } from "../api-client/authorization";
import { loginSuccess, loginFailure } from "../action-creators/login";

function* loginAsync(formValues) {
  try {
    const response = yield call(loginRequest, formValues.values);
    if ((response.statusText = "OK")) {
      yield put(loginSuccess(response.data));
    }
  } catch (error) {
    yield put(loginFailure(error.response.data));
  }
}

export function* watchLogin() {
  yield takeEvery("LOGIN_REQUEST", loginAsync);
}
