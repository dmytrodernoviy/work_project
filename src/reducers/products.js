import * as types from "../action-creators/products";

const initialState = {
  loading: false,
  products: [],
  error: null
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case types.PRODUCTS_LIST_REQUEST:
      return { ...state, loading: true };
    case types.PRODUCTS_LIST_SUCCESS:
      return { ...state, loading: false, products: action.data };
    case types.PRODUCTS_LIST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
