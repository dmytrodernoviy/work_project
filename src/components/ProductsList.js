import React from "react";
import { ScrollView } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({ productItems }) => {
  return (
    <ScrollView>
      {productItems.map(item => (
        <ProductItem key={item.pk} item={item} />
      ))}
    </ScrollView>
  );
};

export default ProductList;
