import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Button from "../buttons/Button";
import { Colors } from "../../constant/styles";

const ModalAlert = ({ children }) => {
  return (
    <View
      style={{
        padding: 24,
        borderRadius: 16,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
      {children}
    </View>
  );
};

export const SuccessModalAlert = ({ image, message }) => {
  return (
    <ModalAlert>
      <Image
        source={require("../../assets/icons/close.svg")}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      />
      <Image
        source={image}
        style={{
          maxWidth: 150,
        }}
      />
      <Text>{message}</Text>
    </ModalAlert>
  );
};

export default ModalAlert;
