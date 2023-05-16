import * as React from "react";
import { Button, Text, View, Image } from "react-native";
import { Colors } from "../constant/styles";
import { ScrollView } from "react-native-gesture-handler";

export default function Cerita({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Cerita</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ alignItems: "center" }}
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
            {videos.map((video) => {
              return (
                <Pressable
                  key={video.id}
                  onPress={() =>
                    navigation.navigate("VideoDetails", {
                      videoId: video.id,
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
