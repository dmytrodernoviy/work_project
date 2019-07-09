import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { withNextInputAutoFocusForm } from "react-native-formik";
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
  password: Yup.string()
    .required()
    .min(8, "Min length is 8 characters")
});

const LoginForm = ({ error, resetError, loginSubmit }) => {
  const onChangeText = (propsFormik, fieldType, text) => {
    resetError();
    propsFormik.setFieldValue(fieldType, text);
  };

  return (
    <Formik
      onSubmit={values =>
        loginSubmit({ email: values.email, password: values.password })
      }
      validationSchema={validationSchema}
    >
      {props => {
        return (
          <InputsContainer style={styles.form}>
            <CustomField
              label="Email"
              name="email"
              type="email"
              onChangeText={text => onChangeText(props, "email", text)}
            />
            <CustomField
              label="Password"
              name="password"
              type="password"
              onChangeText={text => onChangeText(props, "password", text)}
            />
            <View>
              {error && error.non_field_errors && (
                <Text>{error.non_field_errors[0]}</Text>
              )}
            </View>
            <AuthorizationButton
              style={styles.button}
              onPress={props.handleSubmit}
              title="sign in"
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

export default LoginForm;
