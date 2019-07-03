import Reactotron from "reactotron-react-native";
import sagaPlugin from "reactotron-redux-saga";
import { reactotronRedux } from "reactotron-redux";

export const reactotron = Reactotron.configure({ name: "React Native App" }) // controls connection & communication settings
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

const sagaMonitor = Reactotron.createSagaMonitor();
export default sagaMonitor;
