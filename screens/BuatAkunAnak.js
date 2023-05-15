import React from "react";
import axios from "axios";
import { Colors } from "../constant/styles";
import { Image, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Button from "../components/buttons/Button";
import AgeCategories from "../components/forms/AgeCategories";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/slices/user";

const Signup = ({ navigation }) => {
  const [anak, setAnak] = React.useState({
    nama: "",
    usia: undefined,
  });
  const [chooseAge, setChooseAge] = React.useState(false);
  function goToAgeOptions() {
    setChooseAge(true);
    console.log(anak);
  }

  const { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function inputAnakHandler(identifier, userInput) {
    setAnak((prev) => {
      return {
        ...prev,
        [identifier]: userInput,
      };
    });
  }

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
          {/* TODO finish the age option */}
          <AgeCategories />
          <Button
            variant="primary"
            onPress={async (values) => {
              dispatch(setLoading(true));
              await axios
                .post("https://api.marica.id/api/v1/user/anak", {
                  nama: anak.nama,
                  usia: anak.usia,
                })
                .then((res) => {
                  dispatch(setAnak(res.data.data));
                  dispatch(setLoading(false));
                  navigation.navigate("HomeScreen");
                })
                .catch((err) => {
                  console.log(err.response.data.message);
                });
            }}
          >
            {isLoading ? "Tunggu sebentar..." : "Selesai!"}
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
    fontFamily: "Nunito-Medium",
    color: Colors.slate500,
    borderColor: Colors.slate400,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  heading: {
    color: Colors.slate500,
    maxWidth: 250,
    textAlign: "center",
    marginTop: 16,
    fontFamily: "Nunito-Bold",
    fontSize: 20,
  },
  text: {
    color: Colors.slate500,
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
