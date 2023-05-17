import * as React from "react";
import { videos } from "../assets/videos/videos";
import { useSelector, useDispatch } from "react-redux";
import { Image, View, ScrollView, Text, Pressable } from "react-native";
import { Colors } from "../constant/styles";
import { useNavigation } from "@react-navigation/core";

export default function Home() {
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
                  videoTitle: "Demo Video",
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

const styles = {
  scrollContainer: {
    padding: 16,
  },
};
