import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { RaisedTextButton } from "react-native-material-buttons";
import KeyboardSpacer from "react-native-keyboard-spacer";
import LoginForm from "../components/LoginForm";
import { height, width } from "../utilites";
import { DismissKeyboard } from "../components/DismissKeyboard";
import { images } from "../assets/images";
import { colors } from "../consts/colors";

const LoginScreen = ({ loginSubmit, error, resetError, navigation }) => (
  <DismissKeyboard>
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
      <LoginForm
        loginSubmit={loginSubmit}
        error={error}
        resetError={resetError}
      />
      <RaisedTextButton
        style={styles.button}
        title="to sign up"
        color="grey"
        titleColor="black"
        titleStyle={{ fontSize: 20 }}
        onPress={() => navigation.navigate("RegisterScreenContainer")}
      />
      <KeyboardSpacer />
    </View>
  </DismissKeyboard>
);

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    backgroundColor: colors.mainColor,
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

export default LoginScreen;
