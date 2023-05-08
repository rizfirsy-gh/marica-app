import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Colors } from "../../constant/styles";

const TabNavigation = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingBottom: 16,
        borderColor: Colors.cyan400,
        backgroundColor: "#fff",
        borderWidth: 2,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.cyan200,
          borderColor: Colors.cyan400,
          borderLeftWidth: 2,
          borderRightWidth: 2,
          borderBottomWidth: 2,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          padding: 16,
        }}
      >
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../../assets/icons/home.png")}
            style={{
              width: 32,
              height: 32,
            }}
          />
          <Text
            style={{
              color: Colors.cyan800,
            }}
          >
            Home
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable onPress={() => navigation.navigate("Cerita")}>
          <Image
            source={require("../../assets/icons/cerita.png")}
            style={{
              width: 36,
              height: 36,
            }}
          />
          <Text
            style={{
              color: Colors.slate400,
            }}
          >
            Cerita
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable onPress={() => navigation.navigate("Musik")}>
          <Image
            source={require("../../assets/icons/musik.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text
            style={{
              color: Colors.slate400,
            }}
          >
            Musik
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable onPress={() => navigation.navigate("Aktifitas")}>
          <Image
            source={require("../../assets/icons/aktifitas.png")}
            style={{
              width: 28,
              height: 28,
            }}
          />
          <Text
            style={{
              color: Colors.slate400,
            }}
          >
            Aktifitas
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TabNavigation;
