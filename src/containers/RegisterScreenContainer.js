import React from "react";
import { connect } from "react-redux";
import { registerRequest } from "../action-creators/register";
import { resetError } from "../action-creators/login";
import Register from "../screens/Register";

const mapStateToProps = state => ({
  errorRegister: state.authorization.errorRegister
});

const mapDispatchToProps = dispatch => ({
  registerSubmit: formValues => dispatch(registerRequest(formValues)),
  resetErr: () => dispatch(resetError())
});

const RegisterScreenContainer = ({
  errorRegister,
  registerSubmit,
  resetErr,
  navigation
}) => (
  <Register
    errorRegister={errorRegister}
    registerSubmit={registerSubmit}
    resetError={resetErr}
    navigation={navigation}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreenContainer);
