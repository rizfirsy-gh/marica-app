import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import Video from "../components/cards/Video";
import Button from "../components/buttons/Button";

const Welcome = () => {
  return (
    <LinearGradient colors={["#FFFFFF", "#DAFAFF"]} style={styles.bgGradient}>
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
        <View style={styles.slideImage}>
          <Video />
          <Video />
        </View>
      </View>
      <View style={styles.bottom}>
        <Button variant={"primary"}>Buat akun baru</Button>
        <Button variant={"tertiary"}>Sudah punya akun</Button>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bgGradient: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    gap: 64,
    padding: 16,
  },
  top: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: "#64748B",
    maxWidth: 250,
    textAlign: "center",
    marginTop: 16,
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  slideImage: {
    flexDirection: "row",
    gap: 16,
    overflow: "scroll",
    marginTop: 16,
  },
});

export default Welcome;
