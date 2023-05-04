import React from "react";
import { Colors } from "../../constant/styles";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Pressable } from "react-native";

const Button = ({ variant, onPress, children }) => {
  if (variant === "primary") {
    return (
      <View style={styles.primaryButton}>
        <Pressable onPress={onPress}>
          <LinearGradient colors={["#0891B2", "#22D3EE"]}>
            <Text style={styles.buttonText}>{children}</Text>
          </LinearGradient>
        </Pressable>
      </View>
    );
  }
  if (variant === "secondary") {
    return (
      <View style={styles.secondaryButton}>
        <Pressable onPress={onPress}>
          <Text style={styles.secondaryButtonText}>{children}</Text>
        </Pressable>
      </View>
    );
  }
  if (variant === "tertiary") {
    return (
      <Pressable onPress={onPress}>
        <Text style={styles.tertiaryButton}>{children}</Text>
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  primaryButton: {
    borderRadius: 16,
    overflow: "hidden",
    width: 400,
    maxWidth: "100%",
  },
  secondaryButton: {
    borderRadius: 16,
    overflow: "hidden",
    width: 400,
    maxWidth: "100%",
    borderWidth: 2,
    borderColor: "#22D3EE",
  },
  buttonText: {
    fontFamily: "Nunito-Medium",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
    color: "#fff",
    textAlign: "center",
  },
  secondaryButtonText: {
    fontFamily: "Nunito-Medium",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
    color: "#22D3EE",
    textAlign: "center",
  },
  tertiaryButton: {
    fontFamily: "Nunito-Medium",
    color: Colors.slate500,
  },
});

export default Button;
