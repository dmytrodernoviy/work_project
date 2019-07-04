import { all } from "redux-saga/effects";
import { watchLogin } from "./login";
import { watchRegister } from "./register";
import { watchInitApp } from "./initApp";

export default function* rootSaga() {
  yield all([watchLogin(), watchRegister(), watchInitApp()]);
}
