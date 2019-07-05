import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { RaisedTextButton } from "react-native-material-buttons";
import { connect } from "react-redux";
import Logo from "../assets/img/logo.png";
import { height, width, DismissKeyboard } from "../utilites";
import RegisterForm from "../components/RegisterForm";
import { registerRequest } from "../action-creators/register";
import { resetError } from "../action-creators/login";

const mapStateToProps = state => ({
  errorRegister: state.authorization.errorRegister
});

const mapDispatchToProps = dispatch => ({
  register: formValues => dispatch(registerRequest(formValues)),
  resetError: () => dispatch(resetError())
});

class Register extends Component {
  render() {
    return (
        <DismissKeyboard>
          <View style={styles.container}>
                <Image source={Logo} style={styles.logo} />
                <RegisterForm registerSubmit={this.props.register} error={this.props.errorRegister} resetError={this.props.resetError}/>
                <RaisedTextButton
                    style={styles.button}
                    title="to sign in"
                    color="grey"
                    titleColor="black"
                    titleStyle={{ fontSize: 20 }}
                    onPress={() => this.props.navigation.navigate("LoginScreen")}
                  />
              </View>
      </DismissKeyboard>
    );
  }
}

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
)(Register);
