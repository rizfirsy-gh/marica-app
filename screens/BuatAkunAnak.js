import React from "react";
import axios from "axios";
import { Colors } from "../constant/styles";
import { Image, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Button from "../components/buttons/Button";
import AgeCategories from "../components/forms/AgeCategories";
import { useDispatch, useSelector } from "react-redux";
import { setDataAnak, setLoading } from "../redux/slices/anak";
import { storeAnakData } from "../redux/actions/user-action";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const BuatAkunAnak = ({ navigation }) => {
  const [namaAnak, setNamaAnak] = React.useState("");
  const [usiaAnak, setUsiaAnak] = React.useState("");

  const { isLoading, userInfo, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const chooseAgeHandler = (values) => {
    setUsiaAnak(values);
  };

  const createAnakHandler = async () => {
    dispatch(setLoading(true));
    await axios
      .post(
        "https://api.marica.id/api/v1/user/anak",
        {
          nama: namaAnak,
          usia: usiaAnak,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(setDataAnak(res.data.data));
        storeAnakData(res.data.data);
        console.log("res.data.data", res.data.data);
        navigation.navigate("HomeScreen");
      })
      .catch((err) => {
        console.log(err.response);
      });
    dispatch(setLoading(false));
  };

  const windowWidth = Dimensions.get("window").width;

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
          contentFit="contain"
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
        {/* <Text style={styles.heading}>
          {chooseAge ? "Pilih rentang usia" : "Tambahkan profil anak!"}
        </Text>
        <Text style={styles.text}>
          {chooseAge
            ? `Silahkan pilih kategori usia agar kami dapat menyarankan konten yang relevan dengan ${namaAnak}.`
            : `Untuk memulai, mari buat satu profil anak terlebih dahulu.!`}
        </Text> */}
        <Text style={styles.text}>
          Untuk memulai, mari buat satu profil anak terlebih dahulu.!
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nama anak"
          value={namaAnak}
          onChangeText={(nama) => setNamaAnak(nama)}
        />
        <View
          style={{
            padding: 16,
            borderRadius: 16,
            borderWidth: 2,
            borderColor: Colors.cyan400,
          }}
        >
          <Text
            style={{
              paddingBottom: 16,
              fontFamily: "Nunito-Bold",
              color: Colors.cyan600,
              fontSize: 20,
            }}
          >
            Pilih rentang usia anak
          </Text>
          <AgeCategories chooseAge={chooseAgeHandler} />
        </View>
        <Button variant="primary" onPress={createAnakHandler}>
          "Selesai!"
        </Button>
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

export default BuatAkunAnak;
