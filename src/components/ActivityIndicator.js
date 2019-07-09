import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { height, width } from "../utilites";
import { colors } from "../consts/colors";

const AactivityIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.mainColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height,
    width,
    justifyContent: "center"
  }
});

export default AactivityIndicator;
