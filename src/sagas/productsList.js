import { put, takeEvery, call } from "redux-saga/effects";
import {
  PRODUCTS_LIST_REQUEST,
  productsListSuccess,
  productsListFailure
} from "../action-creators/products";
import { getItems } from "../services/restAPI";

function* productsList() {
  try {
    const response = yield call(getItems);
    if (response.status === 200) {
      yield put(productsListSuccess(response.data.data));
    } else {
      throw response;
    }
  } catch (error) {
    yield put(productsListFailure(error.data));
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchProductsList() {
  yield takeEvery(PRODUCTS_LIST_REQUEST, productsList);
}
