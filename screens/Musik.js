import * as React from "react";
import { Button, Text, View, Image } from "react-native";
import { Colors } from "../constant/styles";
import { ScrollView } from "react-native-gesture-handler";

export default function Musik({ navigation }) {
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
        Belum ada cerita {":("}
      </Text>
    </View>
  );
}
