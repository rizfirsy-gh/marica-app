import * as React from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Colors } from "../constant/styles";

export default function Feedback({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        gap: 24,
        padding: 16,
      }}
    >
      <View
        style={{
          width: 300,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/under-construction.png")}
          objectFit="cover"
          style={{
            width: 280,
            height: 176,
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: "Nunito-Bold",
          fontSize: 16,
          color: Colors.slate500,
          textAlign: "center",
        }}
      >
        Eh sebentar ya halaman Feedback masih dikembangkan {":)"}
      </Text>
    </View>
  );
}
