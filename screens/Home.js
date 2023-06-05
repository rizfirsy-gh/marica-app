import * as React from "react";
import { dummyCerita } from "../assets/media/cerita";
import { dummyMusik } from "../assets/media/musik";
import { useSelector, useDispatch } from "react-redux";
import { Image, View, ScrollView, Text, Pressable } from "react-native";
import { Colors } from "../constant/styles";
import { useNavigation } from "@react-navigation/core";
import { getAnakDataFromServer } from "../redux/actions/user-action";

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
              flexWrap: "wrap",
              gap: 16,
              marginTop: 8,
            }}
          >
            {dummyCerita.map((cerita) =>
              cerita.episodes.map(
                (episode) =>
                  episode.isNew && (
                    <Pressable
                      key={episode.title}
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
                  )
              )
            )}
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
            Musik baru
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 16,
              marginTop: 8,
            }}
          >
            {dummyMusik.map((cerita) =>
              cerita.playlist.map(
                (list) =>
                  list.isNew && (
                    <Pressable
                      key={list.title}
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
                  )
              )
            )}
          </View>
        </View>
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

const styles = {
  scrollContainer: {
    padding: 16,
  },
};
