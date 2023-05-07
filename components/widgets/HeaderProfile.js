import React from "react";
import { Colors } from "../../constant/styles";
import { View, Text, Image } from "react-native";

const HeaderProfile = () => {
  return (
    <View
      style={{
        padding: 16,
        paddingTop: 32,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 4,
        }}
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
      </View>
    </View>
  );
};

const styles = {
  container: {
    flexDirections: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default HeaderProfile;
