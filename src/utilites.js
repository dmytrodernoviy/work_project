import React from "react";
import { Dimensions, TouchableWithoutFeedback, Keyboard } from "react-native";

export const { width, height } = Dimensions.get("window");

export const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
