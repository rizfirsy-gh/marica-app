import * as React from "react";
import { Text, View, Image } from "react-native";
import { Colors } from "../constant/styles";

export default function TentangKami({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        gap: 24,
      }}
    >
      <Image source={require("../assets/images/empty.png")} />
      <Text
        style={{
          fontFamily: "Nunito-Bold",
          fontSize: 20,
          color: Colors.slate500,
        }}
      >
        Belum ada transaksi {":("}
      </Text>
    </View>
  );
}
