import { put, takeEvery, call } from "redux-saga/effects";
import { loginRequest } from "../services/restAPI";
import { loginSuccess, loginFailure } from "../action-creators/login";
import { setTokenToDB } from "../services/dataBase";

function* loginAsync(formValues) {
  try {
    const response = yield call(loginRequest, formValues.values);
    if (response.status === 200) {
      yield put(loginSuccess(response.data.user, response.data.token));
      setTokenToDB(response?.data?.token);
    } else {
      throw response;
    }
  } catch (error) {
    yield put(loginFailure(error.data));
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchLogin() {
  yield takeEvery("LOGIN_REQUEST", loginAsync);
}
