import React from "react";
import { Colors } from "../../constant/styles";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";

const ChooseAge = () => {
  return (
    <View>
      <Pressable
        style={styles.ageOption}
        onPressIn={() => console.log("5-8 thn")}
      >
        <Image
          source={require("../../assets/images/toddler-colored.png")}
          resizeMode="cover"
          resizeMethod="resize"
          style={{
            borderRadius: 16,
          }}
        />
        <Text style={styles.ageText}>Usia 0-4 tahun</Text>
      </Pressable>
      <Pressable
        style={styles.ageOption}
        onPressIn={() => console.log("5-8 thn")}
      >
        <Image
          source={require("../../assets/images/kid-colored.png")}
          resizeMode="cover"
          resizeMethod="resize"
          style={{
            borderRadius: 16,
          }}
        />
        <Text style={styles.ageText}>Usia 5-8 tahun</Text>
      </Pressable>
    </View>
  );
};

const styles = {
  ageOption: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  ageText: {
    borderWidth: 2,
    flex: 1,
    fontFamily: "Nunito-Medium",
    color: Colors.slate500,
    borderColor: Colors.slate400,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
};

export default ChooseAge;
