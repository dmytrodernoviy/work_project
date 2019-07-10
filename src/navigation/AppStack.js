import { createAppContainer, createStackNavigator } from "react-navigation";
import transition from "./transition-config";
import ProductsScreenContainer from "../containers/ProductsScreenContainer";
import ProductDetailsListContainer from "../containers/ProductDetailsScreenContainer";

const AppStack = createStackNavigator(
  {
    ProductsScreenContainer: { screen: ProductsScreenContainer },
    ProductDetailsScreenContainer: { screen: ProductDetailsListContainer }
  },
  {
    headerMode: "none",
    transitionConfig: transition
  }
);

export default createAppContainer(AppStack);
