import React from "react";
import { View, Text, Image } from "react-native";
import { Colors } from "../../constant/styles";

const TabNavigation = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 8,
        padding: 16,
        borderColor: Colors.cyan400,
        backgroundColor: "#fff",
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/icons/home.png")}
          style={{
            width: 42,
            height: 42,
          }}
        />
        <Text>Home</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/icons/cerita.png")}
          style={{
            width: 42,
            height: 42,
          }}
        />
        <Text>Cerita</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/icons/home.png")}
          style={{
            width: 42,
            height: 42,
          }}
        />
        <Text>Musik</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/icons/home.png")}
          style={{
            width: 42,
            height: 42,
          }}
        />
        <Text>Aktifitas</Text>
      </View>
    </View>
  );
};

export default TabNavigation;
