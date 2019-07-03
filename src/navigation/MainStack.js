import { Easing, Animated } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/Login";
import Register from "../screens/Register";

const MainStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    Register: { screen: Register }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(MainStack);
