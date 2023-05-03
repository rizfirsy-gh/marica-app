import React from "react";
import { Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/buttons/Button";

const Signup = ({ navigation }) => {
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
        <Text style={styles.heading}>Tambahkan profil anak!</Text>
        <Text style={styles.text}>
          Untuk memulai, mari buat satu profil anak terlebih dahulu.
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nama anak" />
        <Button variant="secondary">Lanjut</Button>
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
    paddingTop: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  form: {
    flex: 2,
    gap: 8,
    padding: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: "#94A3B8",
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  heading: {
    color: "#64748B",
    maxWidth: 250,
    textAlign: "center",
    marginTop: 16,
    fontFamily: "Nunito-Bold",
    fontSize: 20,
  },
  text: {
    color: "#64748B",
    maxWidth: 250,
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "Nunito-Medium",
  },
  formContainer: {
    flex: 2,
    width: "100%",
    padding: 16,
  },
});

export default Signup;
