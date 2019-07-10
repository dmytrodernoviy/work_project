import React from "react";
import { ScrollView } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({ productItems, navigation }) => {
  return (
    <ScrollView>
      {productItems.map(item => (
        <ProductItem key={item.pk} item={item} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default ProductList;
