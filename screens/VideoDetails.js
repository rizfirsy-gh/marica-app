import React from "react";
import Video from "react-native-video";
import YoutubePlayer from "react-native-youtube-iframe";
import video from "../assets/videos/testVideo.mp4";
import { View, Text, Pressable, Image, FlatList } from "react-native";
import { Colors } from "../constant/styles";

const source = require("../assets/videos/testVideo.mp4");

const VideoDetails = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
      }}
    >
      6tt
      <YoutubePlayer height={210} videoId={"N_oiwAuCpVQ"} />
      <Text
        style={{
          fontFamily: "Nunito-Bold",
          color: Colors.slate700,
          fontSize: 24,
        }}
      >
        Judul video
      </Text>
      <Text
        style={{
          fontFamily: "Nunito-Medium",
          color: Colors.slate400,
          fontSize: 14,
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Morbi pharetra adipiscing at
        metus pretium sagittis semper eu. Praesent auctor tellus velit risus
        proin convallis. Tincidunt amet...
      </Text>
      <View>
        <Text>Episode</Text>
        <FlatList>
          <Text>Episode 1</Text>
        </FlatList>
      </View>
    </View>
  );
};

export default VideoDetails;
