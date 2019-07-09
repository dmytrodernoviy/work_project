import { createAppContainer, createStackNavigator } from "react-navigation";
import transition from "./transition-config";
import LoginScreenContainer from "../containers/LoginScreenContainer";
import RegisterScreenContainer from "../containers/RegisterScreenContainer";

const AuthorizationStack = createStackNavigator(
  {
    LoginScreenContainer: { screen: LoginScreenContainer },
    RegisterScreenContainer: { screen: RegisterScreenContainer }
  },
  {
    headerMode: "none",
    transitionConfig: transition
  }
);

export default createAppContainer(AuthorizationStack);
