import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/Login";
import Register from "../screens/Register";
import transition from "./transition-config";

const AuthorizationStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    Register: { screen: Register }
  },
  {
    headerMode: "none",
    transitionConfig: transition
  }
);

export default createAppContainer(AuthorizationStack);
