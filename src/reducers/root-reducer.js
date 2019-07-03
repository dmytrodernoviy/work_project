import { combineReducers } from "redux";
import authorization from "./authorization";

const RootReducer = combineReducers({ authorization });

export default RootReducer;
