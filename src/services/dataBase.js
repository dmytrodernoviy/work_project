import AsyncStorage from "@react-native-community/async-storage";

const TOKEN = "token";

export const setTokenToDB = async token => {
  try {
    await AsyncStorage.setItem(TOKEN, token);
  } catch (error) {}
};

export const removeTokenFromDB = async token => {
  try {
    await AsyncStorage.removeItem(TOKEN, token);
  } catch {}
};

export const setUserDataToDB = async userData => {
  try {
    const userValues = [
      ["username", userData.username],
      ["email", userData.email]
    ];
    await AsyncStorage.multiSet(userValues);
  } catch (error) {}
};

export const getTokenFromDB = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN);
    return token;
  } catch (error) {}
};
