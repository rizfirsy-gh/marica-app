import React from "react";
import { Colors } from "../constant/styles";
import Button from "../components/buttons/Button";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const TermCondition = ({ navigation }) => {
  return (
    <LinearGradient colors={["#FFFFFF", "#DAFAFF"]} style={styles.bgGradient}>
      <Image
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        resizeMethod="resize"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      />
      <View style={styles.termConditionContainer}>
        <ScrollView style={styles.termConditionText}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Enim lectus posuere
            pellentesque risus feugiat nunc. Sed mauris lacus maecenas nunc
            ornare elementum. Leo sodales dictum ut lectus tristique purus
            aliquam aliquam at. Feugiat turpis sed scelerisque et sed porttitor
            arcu. Felis quam eu facilisis parturient non tristique sed lacinia.
            Ut sit enim cursus elementum arcu. Id suspendisse vel massa cursus
            ut sem purus. Tristique gravida neque ipsum turpis ornare enim
            sagittis aliquam. Id ultricies tellus volutpat nunc congue bibendum
            gravida. Pulvinar amet malesuada sapien sit varius commodo ac.
            Placerat sit tortor lorem tellus volutpat faucibus eget in. Feugiat
            purus augue posuere fermentum cursus mauris. Auctor aliquam iaculis
            viverra neque id sed convallis posuere felis. Vestibulum ut eget at
            faucibus. Sit faucibus integer in eget cursus facilisis ac sit.
            Auctor interdum tempor morbi id duis.
          </Text>
        </ScrollView>
        <Button
          variant="primary"
          onPress={() => navigation.navigate("Buat akun anak")}
        >
          Terima & lanjutkan
        </Button>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bgGradient: {
    position: "relative",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    gap: 64,
  },
  termConditionContainer: {
    padding: 16,
    flex: 1,
    gap: 16,
  },
  termConditionText: {
    padding: 16,
    borderWidth: 2,
    borderColor: Colors.slate300,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  text: {
    color: Colors.slate500,
    fontFamily: "Nunito-Medium",
  },
});

export default TermCondition;
