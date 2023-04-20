import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text } from "react-native";

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.button}>
      <LinearGradient colors={["#0891B2", "#22D3EE"]}>
        <Text style={styles.buttonText}>{children}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    overflow: "hidden",
  },
  buttonText: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
    color: "#fff",
  },
});

export default PrimaryButton;
