import { createAppContainer, createStackNavigator } from "react-navigation";
import transition from "./transition-config";
import ProductsScreenContainer from "../containers/ProductsScreenContainer";

const AppStack = createStackNavigator(
  {
    ProductsScreenContainer: { screen: ProductsScreenContainer }
  },
  {
    headerMode: "none",
    transitionConfig: transition
  }
);

export default createAppContainer(AppStack);
