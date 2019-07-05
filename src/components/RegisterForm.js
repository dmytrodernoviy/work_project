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

const RegisterForm = props => {
    const { error, resetError } = props;
    const onChangeText = (propsFormik, fieldType, text) => {
        resetError();
        propsFormik.setFieldValue(fieldType, text);
    };

    return (
        <Formik
            onSubmit={values =>
                props.registerSubmit({ 
                    username: values.login,
                    email: values.email, 
                    password1: values.password1,
                    password2: values.password2 })
            }
            validationSchema={validationSchema}
        >
            {props => {
                return (
                    <InputsContainer style={styles.form}>
                        <FormikInput
                            label="Login"
                            name="login"
                            type="text"
                            baseColor="white"
                            textColor="white"
                            tintColor="white"
                            fontSize={22}
                            labelFontSize={18}
                            onChangeText={text => onChangeText(props, "login", text)}
                        />
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
                            name="password1"
                            type="password"
                            baseColor="white"
                            textColor="white"
                            tintColor="white"
                            fontSize={22}
                            labelFontSize={18}
                            onChangeText={text => onChangeText(props, "password1", text)}
                        />
                        <FormikInput
                            label="Сonfirm Password"
                            name="password2"
                            type="password"
                            baseColor="white"
                            textColor="white"
                            tintColor="white"
                            fontSize={22}
                            labelFontSize={18}
                            onChangeText={text => onChangeText(props, "password2", text)}
                        />
                        <View>
                            {error && error.non_field_errors ? 
                                <Text>{error.non_field_errors[0]}</Text> : 
                                error && error.username ? 
                                <Text>{error.username[0]}</Text> : 
                                error && error.password ?
                                <Text>{error.password[0]}</Text> :
                                error && error.email ?
                                <Text > {error.email[0]}</Text> :
                                null
                        }
                        </View>
                        <RaisedTextButton
                            style={styles.button}
                            onPress={props.handleSubmit}
                            title="sign up"
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
        width: width * 0.85,
    },
    button: {
        marginTop: height * 0.05
    }
});

export default RegisterForm;
