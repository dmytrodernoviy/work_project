import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import HeaderProductList from "../components/HeaderProductsList";
import ProductList from "../components/ProductsList";
import { productsListRequest } from "../action-creators/products";
import AactivityIndicator from "../components/ActivityIndicator";
import { logOut } from "../action-creators/login";

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading
});

const mapDispatchToProps = dispatch => ({
  productsRequest: () => dispatch(productsListRequest()),
  logout: () => dispatch(logOut())
});

class Products extends Component {
  componentDidMount() {
    this.props.productsRequest();
  }

  render() {
    const { products, loading } = this.props;
    return (
      <View>
        <HeaderProductList logout={this.props.logout} />
        {loading ? (
          <AactivityIndicator />
        ) : (
          <ProductList productItems={products} />
        )}
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
