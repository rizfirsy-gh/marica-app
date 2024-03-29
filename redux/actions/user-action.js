import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setDataAnak } from "../slices/anak";
import axios from "axios";

export const storeUserData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("user_info", jsonValue);
  } catch (e) {
    console.log("asyncStorage: ", e);
  }
};
export const storeUserToken = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("token", jsonValue);
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

export const storeAnakData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("anak_info", jsonValue);
  } catch (e) {
    console.log("asyncStorage: ", e);
  }
};

export const getAnakData = async () => {
  try {
    const dispatch = useDispatch();
    const value = await AsyncStorage.getItem("anak_info");
    dispatch(setDataAnak(JSON.parse(value)));
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.log("asyncStorage: ", e);
  }
};

export const getAnakDataFromServer = async (token) => {
  let updatedDataAnak;
  await axios
    .get("https://api.marica.id/api/v1/user/all-anak", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (updatedDataAnak = res))
    .catch((err) => {
      console.log(err.response);
    });

  return updatedDataAnak ? updatedDataAnak : "Can't get data anak";
};
