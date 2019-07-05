import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { height, width } from "../utilites";

const AactivityIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#34a5de" />
    </View>
  );
};

export default AactivityIndicator;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height,
    width,
    justifyContent: "center"
  }
});
