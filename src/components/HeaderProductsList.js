import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { height, width } from "../utilites";
import { setTokenToDB } from "../services/dataBase";
import { images } from "../assets/images";
import { colors } from "../consts/colors";

const HeaderProductList = ({ logout, userData }) => {
  const logOut = () => {
    setTokenToDB("");
    logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.user}>
          <Image source={images.avatar} style={styles.avatar} />
          <Text style={styles.username}>{userData.username}</Text>
        </View>
        <TouchableOpacity onPress={() => logOut()}>
          <View>
            <Image source={images.logout} style={styles.logout} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  avatar: {
    width: width * 0.1,
    height: height * 0.05
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.35
  },
  logout: {
    width: width * 0.1,
    height: height * 0.05
  },
  username: {
    color: "white",
    fontSize: 20
  }
});

export default HeaderProductList;
