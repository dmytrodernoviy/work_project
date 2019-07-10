import React, { Component } from "react";
import { connect } from "react-redux";
import { logOut } from "../action-creators/login";
import { productsListRequest } from "../action-creators/products";
import Products from "../screens/Products";

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading,
  userData: state.authorization.userData
});

const mapDispatchToProps = dispatch => ({
  productsRequest: () => dispatch(productsListRequest()),
  logout: () => dispatch(logOut())
});

class ProductsScreenContainer extends Component {
  componentDidMount() {
    this.props.productsRequest();
  }

  render() {
    const { products, loading, userData, logout, navigation } = this.props;
    return (
      <Products
        products={products}
        loading={loading}
        userData={userData}
        logout={logout}
        navigation={navigation}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsScreenContainer);
