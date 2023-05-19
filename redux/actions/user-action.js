import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUserData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("user_info", jsonValue);
  } catch (e) {
    console.log("asyncStorage: ", e);
  }
};

export const getUserData = async () => {
  try {
    const value = await AsyncStorage.getItem("user_info");
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.log("asyncStorage: ", e);
  }
};

export const deleteUserData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log("error:", error);
  }
};
