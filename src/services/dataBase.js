import AsyncStorage from "@react-native-community/async-storage";

const TOKEN = "token";

export const setTokenToDB = async token => {
  try {
    await AsyncStorage.setItem(TOKEN, token);
  } catch (error) {};
};

export const getTokenFromDB = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN);
    return token;
  } catch (error) {};
};
