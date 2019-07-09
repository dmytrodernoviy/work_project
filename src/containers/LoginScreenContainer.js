import React from "react";
import { connect } from "react-redux";
import { loginRequest, resetError } from "../action-creators/login";
import LoginScreen from "../screens/Login";

const mapStateToProps = state => ({
  errorLogin: state.authorization.errorLogin
});

const mapDispatchToProps = dispatch => ({
  login: formValues => dispatch(loginRequest(formValues)),
  resetError: () => dispatch(resetError())
});

const LoginScreenContainer = ({
  errorLogin,
  login,
  // eslint-disable-next-line no-shadow
  resetError,
  navigation
}) => (
  <LoginScreen
    error={errorLogin}
    loginSubmit={login}
    resetError={resetError}
    navigation={navigation}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenContainer);
