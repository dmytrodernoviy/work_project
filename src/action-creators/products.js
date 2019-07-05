export const PRODUCTS_LIST_REQUEST = "PRODUCTS_LIST_REQUEST";
export const PRODUCTS_LIST_SUCCESS = "PRODUCTS_LIST_SUCCESS";
export const PRODUCTS_LIST_FAILURE = "PRODUCTS_LIST_FAILURE";

export const productsListRequest = () => {
  return { type: PRODUCTS_LIST_REQUEST };
};

export const productsListSuccess = data => {
  return { type: PRODUCTS_LIST_SUCCESS, payload: data };
};

export const productsListFailure = error => {
  return { type: PRODUCTS_LIST_FAILURE, payload: error };
};
