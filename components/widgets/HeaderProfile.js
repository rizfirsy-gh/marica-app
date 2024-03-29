import React from "react";
import { useSelector } from "react-redux";
import { Colors } from "../../constant/styles";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";

const HeaderProfile = () => {
  const { isLoading, userInfo } = useSelector((state) => state.user);
  const { dataAnak } = useSelector((state) => state.anak);
  const navigation = useNavigation();

  console.log("dataAnak: ", dataAnak.nama);

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "#fff",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 4,
          height: 40,
        }}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          source={require("../../assets/images/profile.png")}
          style={{
            width: 24,
            height: 24,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Nunito-SemiBold",
            color: Colors.slate700,
          }}
        >
          {dataAnak.nama}
        </Text>
      </Pressable>
    </View>
  );
};

export default HeaderProfile;
