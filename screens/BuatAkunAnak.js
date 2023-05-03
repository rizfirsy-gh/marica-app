import React from "react";
import { Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/buttons/Button";

const Signup = ({ navigation }) => {
  const [anak, setAnak] = React.useState({
    nama: "",
    usia: undefined,
  });
  const [chooseAge, setChooseAge] = React.useState(false);
  function goToAgeOptions() {
    setChooseAge(true);
    console.log("choose age");
  }

  function inputAnakHandler(identifier, userInput) {
    setAnak((prev) => {
      return {
        ...prev,
        [identifier]: userInput,
      };
    });
  }

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
        <Text style={styles.heading}>
          {chooseAge ? "Pilih rentang usia" : "Tambahkan profil anak!"}
        </Text>
        <Text style={styles.text}>
          {chooseAge
            ? `Silahkan pilih kategori usia agar kami dapat menyarankan konten yang relevan dengan ${anak.nama}.`
            : `Untuk memulai, mari buat satu profil anak terlebih dahulu.!`}
        </Text>
      </View>
      {chooseAge ? (
        <View style={styles.form}>
          //TODO finish the age option
          <TextInput
            style={styles.input}
            placeholder={`Berapa usia ${
              anak.nama !== "" ? anak.nama.toLowerCase() : "anakmu"
            }?`}
            onChangeText={inputAnakHandler.bind(null, "usia")}
            inputMode="numeric"
            maxLength={1}
          />
          <Button
            variant="primary"
            onPress={() => {
              console.log("selesai!", anak.nama, anak.usia);
              navigation.navigate("Home");
            }}
          >
            Selesai!
          </Button>
        </View>
      ) : (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nama anak"
            onChangeText={inputAnakHandler.bind(null, "nama")}
          />
          <Button variant="secondary" onPress={goToAgeOptions}>
            Lanjut
          </Button>
        </View>
      )}
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
