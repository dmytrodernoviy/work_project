import { put, takeEvery, call } from "redux-saga/effects";
import { registerRequest } from "../services/restAPI";
import {
  registerSuccess,
  registerError,
  REGISTER_REQUEST
} from "../action-creators/register";
import { setTokenToDB } from "../services/dataBase";

function* registerAsync(formValues) {
  try {
    const response = yield call(registerRequest, formValues.values);
    if (response.status === 201) {
      yield put(registerSuccess(response.data.user, response.data.token));
      setTokenToDB(response.data.token);
    } else {
      throw response;
    }
  } catch (error) {
    yield put(registerError(error.data));
  }
}

export function* watchRegister() {
  yield takeEvery(REGISTER_REQUEST, registerAsync);
}
