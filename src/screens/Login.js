import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { RaisedTextButton } from "react-native-material-buttons";
import { connect } from "react-redux";
import Logo from "../assets/img/logo.png";
import LoginForm from "../components/LoginForm";
import { height, width, DismissKeyboard } from "../utilites";
import { loginRequest } from "../action-creators/login";

const mapStateToProps = state => {
  console.log(state)
  return(
    {error: state.authorization.error}
  )
}

const mapDispatchToProps = dispatch => ({
  login: formValues => dispatch(loginRequest(formValues))
});

class LoginScreen extends Component {
  render() {
    return (
      <ScrollView>
      <DismissKeyboard>
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
          <LoginForm loginSubmit={this.props.login} error={this.props.error}/>
          <RaisedTextButton
            style={styles.button}
            title="to sign up"
            color="grey"
            titleColor="black"
            titleStyle={{ fontSize: 20 }}
            onPress={() => this.props.navigation.navigate("Register")}
          />
        </View>
      </DismissKeyboard>
      </ScrollView>
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
)(LoginScreen);
