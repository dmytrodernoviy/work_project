import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { withNextInputAutoFocusForm } from "react-native-formik";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { Formik } from "formik";
import * as Yup from "yup";
import { width, height } from "../utilites";
import CustomField from "./CustomField";
import AuthorizationButton from "./AuthorizationButton";

const InputsContainer = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email("Incorrect email"),
  login: Yup.string()
    .required()
    .min(5, "Min length is 5 characters"),
  password1: Yup.string()
    .required()
    .min(8, "Min length is 8 characters"),
  password2: Yup.string()
    .required()
    .min(8, "Min length is 8 characters")
});

const RegisterForm = ({ error, resetError, registerSubmit }) => {
  const onChangeText = (propsFormik, fieldType, text) => {
    resetError();
    propsFormik.setFieldValue(fieldType, text);
  };

  return (
    <Formik
      onSubmit={values =>
        registerSubmit({
          username: values.login,
          email: values.email,
          password1: values.password1,
          password2: values.password2
        })
      }
      validationSchema={validationSchema}
    >
      {props => {
        return (
          <InputsContainer style={styles.form}>
            <CustomField
              label="Login"
              name="login"
              type="text"
              onChangeText={text => onChangeText(props, "login", text)}
            />
            <CustomField
              label="Email"
              name="email"
              type="email"
              onChangeText={text => onChangeText(props, "email", text)}
            />
            <CustomField
              label="Password"
              name="password1"
              type="password"
              onChangeText={text => onChangeText(props, "password1", text)}
            />
            <CustomField
              label="Сonfirm Password"
              name="password2"
              type="password"
              onChangeText={text => onChangeText(props, "password2", text)}
            />
            <View>
              {error && error.non_field_errors ? (
                <Text>{error.non_field_errors[0]}</Text>
              ) : error && error.username ? (
                <Text>{error.username[0]}</Text>
              ) : error && error.password ? (
                <Text>{error.password[0]}</Text>
              ) : error && error.email ? (
                <Text> {error.email[0]}</Text>
              ) : null}
            </View>
            <AuthorizationButton
              style={styles.button}
              onPress={props.handleSubmit}
              title="sign up"
            />
          </InputsContainer>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    width: width * 0.85
  },
  button: {
    marginTop: height * 0.05
  }
});

export default RegisterForm;
