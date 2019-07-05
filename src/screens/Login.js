import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { RaisedTextButton } from "react-native-material-buttons";
import { connect } from "react-redux";
import Logo from "../assets/img/logo.png";
import LoginForm from "../components/LoginForm";
import { height, width, DismissKeyboard } from "../utilites";
import { loginRequest, resetError } from "../action-creators/login";

const mapStateToProps = state => ({
  errorLogin: state.authorization.errorLogin
});

const mapDispatchToProps = dispatch => ({
  login: formValues => dispatch(loginRequest(formValues)),
  resetError: () => dispatch(resetError())
});

const LoginScreen = props => (
  <DismissKeyboard>
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <LoginForm
        loginSubmit={props.login}
        error={props.errorLogin}
        resetError={props.resetError}
      />
      <RaisedTextButton
        style={styles.button}
        title="to sign up"
        color="grey"
        titleColor="black"
        titleStyle={{ fontSize: 20 }}
        onPress={() => props.navigation.navigate("Register")}
      />
    </View>
  </DismissKeyboard>
);

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    backgroundColor: "#34a5de",
    alignItems: "center",
    paddingTop: height * 0.06,
    paddingBottom: height * 0.1
  },
  logo: {
    height: height * 0.26,
    width: width * 0.63
  },
  button: {
    marginTop: 20
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
