import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import sagaMonitor, { reactotron } from "../ReactotronConfig";
import RootReducer from "./reducers/root-reducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const store = createStore(RootReducer, compose(applyMiddleware(sagaMiddleware), reactotron.createEnhancer()));

export default store;

sagaMiddleware.run(rootSaga);
