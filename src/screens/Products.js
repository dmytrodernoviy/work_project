import React from "react";
import { View } from "react-native";
import HeaderProductList from "../components/HeaderProductsList";
import ProductList from "../components/ProductsList";
import AactivityIndicator from "../components/ActivityIndicator";

const Products = ({ logout, userData, loading, products }) => (
  <View>
    <HeaderProductList logout={logout} userData={userData} />
    {loading ? <AactivityIndicator /> : <ProductList productItems={products} />}
  </View>
);

export default Products;
