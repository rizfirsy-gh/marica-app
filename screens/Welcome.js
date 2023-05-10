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
  Dimensions,
} from "react-native";
import Button from "../components/buttons/Button";
import { SuccessModalAlert } from "../components/cards/ModalAlert";

const Welcome = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <LinearGradient colors={["#FFFFFF", "#DAFAFF"]} style={styles.bgGradient}>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flex: 1,
        }}
      >
        <Image
          source={require("../assets/images/background.png")}
          resizeMode="stretch"
          style={{
            width: windowWidth,
            height: 300,
          }}
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
          variant={"primary"}
          onPress={() => navigation.navigate("Signup")}
        >
          Buat akun baru
        </Button>
        <Button
          variant={"secondary"}
          onPress={() => navigation.navigate("Signup")}
        >
          Sudah punya akun, masuk
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
