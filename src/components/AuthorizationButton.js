import React from "react";
import { RaisedTextButton } from "react-native-material-buttons";
import { colors } from "../consts/colors";

const AuthorizationButton = ({ title, onPress }) => (
  <RaisedTextButton
    title={title}
    color={colors.formButton}
    titleColor="black"
    titleStyle={{ fontSize: 20 }}
    onPress={onPress}
  />
);

export default AuthorizationButton;
