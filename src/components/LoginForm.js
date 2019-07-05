import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RaisedTextButton } from "react-native-material-buttons";
import { compose } from "recompose";
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from "react-native-formik";
import { Formik } from "formik";
import { TextField } from "react-native-material-textfield";
import * as Yup from "yup";
import { width, height } from "../utilites";

const FormikInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);
const InputsContainer = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email("Incorrect email"),
  password: Yup.string()
    .required()
    .min(8, "Min length is 8 characters")
});

const LoginForm = props => {
  const { error, resetError } = props;
  const onChangeText = (propsFormik, fieldType, text) => {
    resetError();
    propsFormik.setFieldValue(fieldType, text);
  };

  return (
    <Formik
      onSubmit={values =>
        props.loginSubmit({ email: values.email, password: values.password })
      }
      validationSchema={validationSchema}
    >
      {props => {
        return (
          <InputsContainer style={styles.form}>
            <FormikInput
              label="Email"
              name="email"
              type="email"
              baseColor="white"
              textColor="white"
              tintColor="white"
              fontSize={22}
              labelFontSize={18}
              onChangeText={text => onChangeText(props, "email", text)}
            />
            <FormikInput
              label="Password"
              name="password"
              type="password"
              baseColor="white"
              textColor="white"
              tintColor="white"
              fontSize={22}
              labelFontSize={18}
              onChangeText={text => onChangeText(props, "password", text)}
            />
            <View>
              {error && error.non_field_errors && (
                <Text>{error.non_field_errors[0]}</Text>
              )}
            </View>
            <RaisedTextButton
              style={styles.button}
              onPress={props.handleSubmit}
              title="sign in"
              color="white"
              titleColor="black"
              titleStyle={{ fontSize: 20 }}
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
