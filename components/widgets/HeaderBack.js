import React from "react";
import { Colors } from "../../constant/styles";
import { View, Text, Image, Pressable } from "react-native";

const HeaderBack = ({ navigation }) => {
  return (
    <View
      style={{
        padding: 16,
        paddingTop: 32,
        backgroundColor: "#fff",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 4,
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
          Shinta
        </Text>
      </Pressable>
    </View>
  );
};

export default HeaderBack;
