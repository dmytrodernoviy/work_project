import React from "react";
import { View } from "react-native";
import ProductDetails from "../screens/ProductDetails";

const ProductDetailsListContainer = ({ navigation }) => (
  <View>
    <ProductDetails navigation={navigation} />
  </View>
);

export default ProductDetailsListContainer;
