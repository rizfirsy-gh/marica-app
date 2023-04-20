import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Video = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/images/misi-penyelamatan-bubu.png")}
        resizeMethod="scale"
        resizeMode="cover"
        style={{
          width: 225,
          height: 145,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 225,
    height: 145,
    borderRadius: 16,
    overflow: "hidden",
  },
});

export default Video;
