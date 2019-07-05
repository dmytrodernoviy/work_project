import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { width, height } from "../utilites";
import showIcon from "../assets/img/show.png";
import imageItem from "../assets/img/img_item.jpg";

const ProductItem = ({ item }) => (
  <View style={styles.container}>
    <Image source={imageItem} style={styles.imgItem} />
    <View style={styles.barItem}>
      <TouchableOpacity>
        <Text style={styles.itemName}>{item.theme}</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={item.images.length === 0 ? showIcon : item.images[0]}
          style={styles.showIcon}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: width * 0.05,
    paddingTop: height * 0.02
  },
  itemName: {
    color: "white",
    fontSize: 24
  },
  barItem: {
    width: width * 0.9,
    height: height * 0.05,
    backgroundColor: "#34a5de",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05
  },
  showIcon: {
    width: width * 0.1,
    height: height * 0.05
  },
  imgItem: {
    width: width * 0.9,
    height: height * 0.3
  }
});

export default ProductItem;
