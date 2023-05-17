import * as React from "react";
import { videos } from "../assets/videos/videos";
import { Button, Text, View, Image, Pressable } from "react-native";
import { Colors } from "../constant/styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function Cerita({ navigation }) {
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
          Marica punya banyak cerita seru untuk kamu.
        </Text>
        <TextInput
          placeholder="Cari cerita..."
          style={{
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderWidth: 2,
            borderColor: Colors.slate400,
            borderRadius: 16,
          }}
        />
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
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
            <Pressable
              onPress={() =>
                navigation.navigate("VideoDetails", {
                  videoId: "N_oiwAuCpVQ",
                })
              }
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

            <Pressable
              onPress={() =>
                navigation.navigate("VideoDetails", {
                  videoId: "N_oiwAuCpVQ",
                })
              }
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
            Naik daun
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 16,
              marginTop: 8,
            }}
          >
            {videos.map((video) => {
              return (
                <Pressable
                  key={video.id}
                  onPress={() =>
                    navigation.navigate("VideoDetails", {
                      videoId: video.id,
                      videoTitle: video.title,
                    })
                  }
                >
                  <Image
                    source={require(`../assets/images/thumbnail-data.jpg`)}
                    resizeMode="cover"
                    resizeMethod="resize"
                    style={{
                      width: 334 / 2,
                      height: 334 / 2,
                      borderRadius: 16,
                    }}
                  />
                </Pressable>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
