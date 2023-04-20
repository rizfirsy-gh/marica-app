import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text } from "react-native";

const Button = ({ variant, children }) => {
  if (variant === "primary") {
    return (
      <View style={styles.primaryButton}>
        <LinearGradient colors={["#0891B2", "#22D3EE"]}>
          <Text style={styles.buttonText}>{children}</Text>
        </LinearGradient>
      </View>
    );
  }
  if (variant === "secondary") {
    return (
      <View style={styles.secondaryButton}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    );
  }
  if (variant === "tertiary") {
    return <Text style={styles.tertiaryButton}>{children}</Text>;
  }
};

const styles = StyleSheet.create({
  primaryButton: {
    borderRadius: 16,
    overflow: "hidden",
    width: 400,
    maxWidth: "90%",
  },
  secondaryButton: {
    borderRadius: 16,
    overflow: "hidden",
    width: 400,
    maxWidth: "90%",
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
  tertiaryButton: {
    fontFamily: "Nunito-Medium",
    color: "#64748B",
  },
});

export default Button;
