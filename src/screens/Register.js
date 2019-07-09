import React from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { RaisedTextButton } from "react-native-material-buttons";
import { ScrollView } from "react-native-gesture-handler";
import Logo from "../assets/img/logo.png";
import { height, width } from "../utilites";
import RegisterForm from "../components/RegisterForm";
import { DismissKeyboard } from "../components/DismissKeyboard";
import { colors } from "../consts/colors";

const Register = ({
  registerSubmit,
  errorRegister,
  resetError,
  navigation
}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={{ flex: 1 }}
  >
    <DismissKeyboard>
      <ScrollView style={{ backgroundColor: "#34a5de" }}>
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
          <RegisterForm
            registerSubmit={registerSubmit}
            errorRegister={errorRegister}
            resetError={resetError}
          />
          <RaisedTextButton
            style={styles.button}
            title="to sign in"
            color="grey"
            titleColor="black"
            titleStyle={{ fontSize: 20 }}
            onPress={() => navigation.navigate("LoginScreenContainer")}
          />
        </View>
      </ScrollView>
    </DismissKeyboard>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
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

export default Register;
