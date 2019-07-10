import React from "react";
import { View } from "react-native";
import HeaderProductDetail from "../components/HeaderProductDetail";

const ProductDetails = ({ navigation }) => (
  <View>
    <HeaderProductDetail navigation={navigation} />
  </View>
);

export default ProductDetails;
