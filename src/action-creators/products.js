export const PRODUCTS_LIST_REQUEST = "PRODUCTS_LIST_REQUEST";
export const PRODUCTS_LIST_SUCCESS = "PRODUCTS_LIST_SUCCESS";
export const PRODUCTS_LIST_FAILURE = "PRODUCTS_LIST_FAILURE";

export const productsListRequest = () => ({ type: PRODUCTS_LIST_REQUEST });

export const productsListSuccess = data => ({
  type: PRODUCTS_LIST_SUCCESS,
  data
});

export const productsListFailure = data => ({
  type: PRODUCTS_LIST_FAILURE,
  data
});
