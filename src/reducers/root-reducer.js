import { combineReducers } from "redux";
import authorization from "./authorization";
import products from "./products";

const RootReducer = combineReducers({ authorization, products });

export default RootReducer;
