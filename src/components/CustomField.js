import React from "react";
import { TextField } from "react-native-material-textfield";
import { compose } from "recompose";
import {
  handleTextInput,
  withNextInputAutoFocusInput
} from "react-native-formik";
import { colors } from "../consts/colors";

const FormikInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);

const CustomField = ({ label, name, type }) => (
  <FormikInput
    label={label}
    name={name}
    type={type}
    baseColor={colors.formField}
    textColor={colors.formField}
    tintColor={colors.formField}
    fontSize={22}
    labelFontSize={18}
  />
);

export default CustomField;
