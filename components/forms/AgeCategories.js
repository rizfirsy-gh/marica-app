import React from "react";
import { Colors } from "../../constant/styles";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";

const AgeCategories = ({ chooseAge }) => {
  const [age, setAge] = React.useState(false);

  const choosenAge = age ? "5-8" : "0-4";
  chooseAge(choosenAge);

  return (
    <View style={{ gap: 8 }}>
      <Pressable style={styles.ageOption} onPress={() => setAge(false)}>
        <Image
          source={require("../../assets/images/toddler-colored.png")}
          resizeMode="cover"
          resizeMethod="resize"
          style={{
            borderRadius: 16,
          }}
        />
        <Text
          style={{
            borderWidth: 2,
            flex: 1,
            fontFamily: "Nunito-Medium",
            color: !age ? Colors.cyan500 : Colors.slate500,
            borderColor: !age ? Colors.cyan500 : Colors.slate400,
            paddingVertical: 12,
            paddingHorizontal: 24,
            backgroundColor: "#fff",
            borderRadius: 16,
          }}
        >
          Usia 0-4 tahun
        </Text>
      </Pressable>
      <Pressable style={styles.ageOption} onPress={() => setAge(true)}>
        <Image
          source={require("../../assets/images/kid-colored.png")}
          resizeMode="cover"
          resizeMethod="resize"
          style={{
            borderRadius: 16,
          }}
        />
        <Text
          style={{
            borderWidth: 2,
            flex: 1,
            fontFamily: "Nunito-Medium",
            color: age ? Colors.cyan500 : Colors.slate500,
            borderColor: age ? Colors.cyan500 : Colors.slate400,
            paddingVertical: 12,
            paddingHorizontal: 24,
            backgroundColor: "#fff",
            borderRadius: 16,
          }}
        >
          Usia 5-8 tahun
        </Text>
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

export default AgeCategories;
