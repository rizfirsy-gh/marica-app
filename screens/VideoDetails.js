import React from "react";
import { dummyCerita } from "../assets/media/cerita";
import { dummyMusik } from "../assets/media/musik";
import YoutubePlayer from "react-native-youtube-iframe";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { Colors } from "../constant/styles";
import { ScrollView, Pressable, Dimensions } from "react-native";

const VideoDetails = ({ route, navigation }) => {
  const { videoId, videoTitle, videoDescription } = route.params;
  const ceritaBaru = [];
  const musikBaru = [];

  const windowWidth = Dimensions.get("window").width;

  dummyCerita.map((cerita) =>
    cerita.episodes.filter((episode) =>
      episode.hasOwnProperty("isNew") ? ceritaBaru.push(episode) : null
    )
  );
  dummyMusik.map((musik) =>
    musik.playlist.filter((list) =>
      list.hasOwnProperty("isNew") ? musikBaru.push(list) : null
    )
  );

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 18,
      }}
    >
      <View
        style={{
          position: "relative",
          justifyContent: "center",
          borderRadius: 16,
          overflow: "hidden",
          margin: 16,
        }}
      >
        <Text
          style={{
            position: "absolute",
            textAlign: "center",
            width: "100%",
            padding: 32,
            color: Colors.cyan600,
            fontFamily: "Nunito-Medium",
          }}
        >
          Memuat video...
        </Text>
        <YoutubePlayer height={200} videoId={videoId} />
      </View>
      <ScrollView>
        <View
          style={{
            padding: 16,
            backgroundColor: Colors.slate200,
            borderRadius: 16,
            margin: 16,
            marginTop: 0,
          }}
        >
          <Text
            style={{
              fontFamily: "Nunito-Bold",
              color: Colors.slate700,
              fontSize: 18,
              paddingBottom: 16,
            }}
          >
            {videoTitle ? videoTitle : "Judul video tidak ditemukan"}
          </Text>
          <Text
            style={{
              fontFamily: "Nunito-Medium",
              color: Colors.slate500,
              fontSize: 16,
            }}
          >
            {videoDescription ? videoDescription : "Deskripsi video kosong."}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <Text
            style={{
              color: Colors.cyan600,
              fontSize: 20,
              fontFamily: "Nunito-Medium",
            }}
          >
            Video Lain
          </Text>
          <View
            style={{
              paddingVertical: 16,
              gap: 8,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {ceritaBaru.map((ceritaKu) => (
              <View
                key={ceritaKu.title}
                style={{
                  flexDirection: "row",
                  gap: 16,
                }}
              >
                <Pressable
                  onPress={() =>
                    navigation.navigate("VideoDetails", {
                      videoId: ceritaKu.youtubeId,
                      videoTitle: ceritaKu.title,
                      videoDescription:
                        "Lorem ipsum dolor sit amet consectetur. Morbi pharetra adipiscing at metus pretium sagittis semper eu. Praesent auctor tellus velit risus proin convallis. Tincidunt amet...",
                    })
                  }
                >
                  <View
                    style={{
                      width: windowWidth / 2 - 24,
                      height: 160,
                      padding: 16,
                      borderRadius: 16,
                      backgroundColor: Colors.cyan100,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 8,
                      overflow: "hidden",
                      borderWidth: 2,
                      borderColor: Colors.cyan400,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Nunito-Medium",
                        color: Colors.cyan800,
                        textAlign: "center",
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1000,
                        backgroundColor: Colors.slate50,
                        padding: 8,
                        height: 60,
                        borderRadius: 16,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                    >
                      {ceritaKu.title.length > 35
                        ? ceritaKu.title.slice(0, 35) + "..."
                        : ceritaKu.title}
                    </Text>
                    <Image
                      source={ceritaKu.thumbnail}
                      resizeMode="contain"
                      resizeMethod="resize"
                      style={{
                        width: 480,
                        height: 160,
                      }}
                    />
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoDetails;
