import React, { useEffect, useState } from "react";
import { Colors } from "../constant/styles";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  Text,
  Button as NativeButton,
  Dimensions,
  Image,
} from "react-native";
import Button from "../components/buttons/Button";
import { getUserData } from "../redux/actions/user-action";
import { useDispatch } from "react-redux";
import { setToken, setUserInfo } from "../redux/slices/user";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Welcome = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const dispatch = useDispatch();

  useEffect(() => {
    getUserData()
      .then((res) => {
        if (res === null || res === undefined) {
          navigation.navigate("Welcome");
        } else {
          dispatch(setUserInfo(res));
          dispatch(setToken(res.token));
          navigation.navigate("HomeScreen");
        }
      })
      .catch((err) => console.log("err", err));
  });

  return (
    <LinearGradient colors={["#FFFFFF", "#DAFAFF"]} style={styles.bgGradient}>
      <View
        style={{
          position: "absolute",
          bottom: -24,
          flex: 1,
        }}
      >
        <Image
          source={require("../assets/images/background.png")}
          contentFit="cover"
          style={{
            width: windowWidth,
            height: windowWidth / 1.5,
          }}
          placeholder={blurhash}
        />
      </View>
      <View style={styles.top}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            width: 181,
            height: 76,
          }}
        />
        <Text style={styles.text}>
          Media belajar sambil bermain yang relevan untuk anak-anak.
        </Text>
      </View>
      <Image
        source={require("../assets/images/bubu.png")}
        resizeMode="cover"
        resizeMethod="resize"
        style={{
          width: 350,
          height: 200,
          borderRadius: 16,
        }}
      />
      <View style={styles.bottom}>
        <Button
          variant="secondary"
          onPress={() => navigation.navigate("Signup")}
        >
          Buat akun atau Masuk
        </Button>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bgGradient: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    gap: 24,
  },
  top: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: Colors.slate500,
    maxWidth: 250,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16,
    fontFamily: "Nunito-Medium",
  },
  bottom: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
  },
});

export default Welcome;
