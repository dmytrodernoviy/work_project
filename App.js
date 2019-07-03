import React from "react";
import { Provider } from "react-redux";
import RootContainer from "./src/root/index";
import store from "./src/store";

const App = () => (
  <Provider store={store}>
    <RootContainer />
  </Provider>
);

export default App;
