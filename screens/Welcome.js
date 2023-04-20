import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#DAFAFF"]}
        style={styles.bgGradient}
      />
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
      <PrimaryButton>Buat akun baru</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  bgGradient: {
    flex: 1,
    position: "absolute",
    width: "100%",
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  text: {
    color: "#64748B",
    maxWidth: 250,
    textAlign: "center",
    marginTop: 16,
  },
  background: {
    width: "100%",
  },
});

export default Welcome;
