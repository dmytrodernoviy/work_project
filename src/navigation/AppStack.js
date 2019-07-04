import { createAppContainer, createStackNavigator } from "react-navigation";
import Products from "../screens/Products";
import transition from "./transition-config";

const AppStack = createStackNavigator(
  {
    Products: { screen: Products }
  },
  {
    headerMode: "none",
    transitionConfig: transition
  }
);

export default createAppContainer(AppStack);
