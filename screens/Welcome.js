import React from "react";
import { Colors } from "../constant/styles";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Button as NativeButton,
} from "react-native";
import Video from "../components/cards/Video";
import Button from "../components/buttons/Button";
import WelcomeCarousel from "../components/carousels/WelcomeCarousel";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient colors={["#FFFFFF", "#DAFAFF"]} style={styles.bgGradient}>
      <Image
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        resizeMethod="resize"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      />
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
        {/* this carousel is affecting a ViewPropTypes error */}
        <WelcomeCarousel />
      </View>
      <View style={styles.bottom}>
        <Button
          variant={"primary"}
          onPress={() => navigation.navigate("Signup")}
        >
          Buat akun baru
        </Button>
        <Button variant={"tertiary"}>Sudah punya akun</Button>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bgGradient: {
    position: "relative",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    gap: 64,
  },
  top: {
    flex: 2,
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
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
});

export default Welcome;
