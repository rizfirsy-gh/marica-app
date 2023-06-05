import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../constant/styles";
import UpdateUserInfoForm from "../components/forms/UpdateUserInfoForm";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { Image } from "expo-image";
import { setLoading } from "../redux/slices/user";
import Button from "../components/buttons/Button";

const EditUserInformation = () => {
  const [isEditDataSuccess, setIsEditDataSuccess] = React.useState(false);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const windowWidth = Dimensions.get("window").width;

  const updateDataHandler = async (values) => {
    const nama = values.nama === "" ? userInfo.nama : values.nama;
    const email = values.email === "" ? userInfo.email : values.email;

    dispatch(setLoading(true));
    await axios
      .put(
        "https://api.marica.id/api/v1/user",
        { nama: nama, email: email },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
      .then((res) => {
        console.log("berhasil ubah data: ", res);
      })
      .catch((error) => {
        if (error.response) {
          console.log("error data: ", error.response.data);
          console.log("error status: ", error.response.status);
          console.log("error header: ", error.response.headers);
        } else if (error.request) {
          console.log("Error request: ", error.request);
        } else {
          console.log("Error message: ", error.message);
        }
        console.log("Error config: ", error.config);
      });

    dispatch(setLoading(false));
  };

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
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 16, gap: 24 }}>
        <View
          style={{
            gap: 16,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/profile.png")}
            style={{
              width: 150,
              height: 150,
              backgroundColor: Colors.cyan600,
              borderRadius: 100,
            }}
          />
          <Button variant="secondary">Ubah gambar</Button>
        </View>
        <UpdateUserInfoForm updateHandler={updateDataHandler} />
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
});

export default EditUserInformation;
