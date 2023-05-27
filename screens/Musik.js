import * as React from "react";
import { dummyMusik } from "../assets/media/musik";
import { Button, Text, View, Image, Pressable } from "react-native";
import { Colors } from "../constant/styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function Musik({ navigation }) {
  return (
    <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#fff" }}>
      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            color: Colors.slate400,
            fontFamily: "Nunito-Medium",
            fontSize: 16,
            marginTop: 16,
            marginBottom: 8,
          }}
        >
          Marica punya banyak musik seru untuk kamu.
        </Text>
        <TextInput
          placeholder="Cari musik..."
          style={{
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderWidth: 2,
            borderColor: Colors.slate400,
            borderRadius: 16,
          }}
        />
      </View>
      <ScrollView>
        {dummyMusik.map((musik) => (
          <View
            key={musik.title}
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
              {musik.title}
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
              {musik.playlist.map((list) => (
                <View
                  key={list.title}
                  style={{
                    flexDirection: "row",
                    gap: 16,
                    marginTop: 8,
                  }}
                >
                  <Pressable
                    onPress={() =>
                      navigation.navigate("VideoDetails", {
                        videoId: list.youtubeId,
                      })
                    }
                  >
                    <View
                      style={{
                        height: 200,
                        padding: 16,
                        borderRadius: 16,
                        backgroundColor: Colors.cyan100,
                        borderWidth: 2,
                        borderColor: Colors.cyan500,
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Image
                        source={require("../assets/images/music-thumbnail.png")}
                        resizeMode="contain"
                        resizeMethod="resize"
                        style={{
                          width: 150 / 2,
                          height: 150 / 2,
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: "Nunito-Bold",
                          color: Colors.cyan800,
                          textAlign: "center",
                        }}
                      >
                        {list.title}
                      </Text>
                    </View>
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        ))}
        <View
          style={{
            height: 50,
            width: "100%",
          }}
        ></View>
      </ScrollView>
    </View>
  );
}
