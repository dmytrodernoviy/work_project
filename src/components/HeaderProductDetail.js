import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../consts/colors";
import { height, width } from "../utilites";

const HeaderProductDetail = ({ title, navigation }) => (
  <View style={styles.container}>
    <View style={styles.wrap}>
      <Text style={styles.title}>{title ? title : "Product Title"}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: height * 0.12,
    backgroundColor: colors.mainColor,
    justifyContent: "flex-end",
    paddingBottom: height * 0.015,
    paddingLeft: width * 0.05
  },
  wrap: {
    flexDirection: "row",
    width: width * 0.9,
    justifyContent: "space-between"
  },
  title: {
    color: "white",
    fontSize: 22
  }
});

export default HeaderProductDetail;
