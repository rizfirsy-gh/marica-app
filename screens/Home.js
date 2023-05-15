import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image, View, ScrollView, Text, Pressable } from "react-native";
import { Colors } from "../constant/styles";
import { useNavigation } from "@react-navigation/core";

export default function Home() {
  const { isLoading, userInfo } = useSelector((state) => state.user);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Pressable onPress={() => navigation.navigate("VideoDetails")}>
          <Image
            source={require("../assets/images/bubu.png")}
            resizeMode="cover"
            resizeMethod="resize"
            style={{
              width: 350,
              height: 200,
              borderRadius: 16,
            }}
          />
        </Pressable>
        <View
          style={{
            paddingTop: 24,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Nunito-SemiBold",
              color: Colors.slate700,
            }}
          >
            Cerita baru
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              marginTop: 8,
            }}
          >
            <Pressable onPress={() => navigation.navigate("VideoDetails")}>
              <Image
                source={require("../assets/images/bubu.png")}
                resizeMode="cover"
                resizeMethod="resize"
                style={{
                  width: 334 / 2,
                  height: 334 / 2,
                  borderRadius: 16,
                }}
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("VideoDetails")}>
              <Image
                source={require("../assets/images/bubu.png")}
                resizeMode="cover"
                resizeMethod="resize"
                style={{
                  width: 334 / 2,
                  height: 334 / 2,
                  borderRadius: 16,
                }}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            paddingTop: 24,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Nunito-SemiBold",
              color: Colors.slate700,
            }}
          >
            Direkomendasikan
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 16,
              marginTop: 8,
            }}
          >
            {[1, 2, 3, 4].map((index) => (
              <Pressable
                key={index}
                onPress={() => navigation.navigate("VideoDetails")}
              >
                <Image
                  source={require("../assets/images/bubu.png")}
                  resizeMode="cover"
                  resizeMethod="resize"
                  style={{
                    width: 334 / 2,
                    height: 334 / 2,
                    borderRadius: 16,
                  }}
                />
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = {
  scrollContainer: {
    padding: 16,
  },
};
