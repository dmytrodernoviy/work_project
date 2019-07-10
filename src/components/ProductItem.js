import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { width, height } from "../utilites";
import { images } from "../assets/images";
import { colors } from "../consts/colors";

const ProductItem = ({ item, navigation }) => {
  const loadProductDetail = () =>
    navigation.navigate("ProductDetailsScreenContainer");

  return (
    <View style={styles.container}>
      <Image source={images.img_item} style={styles.imgItem} />
      <View style={styles.barItem}>
        <TouchableOpacity>
          <Text style={styles.itemName}>{item.theme}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => loadProductDetail()}>
          <Image
            source={item.images.length === 0 ? images.show : item.images[0]}
            style={styles.showIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    backgroundColor: colors.mainColor,
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
