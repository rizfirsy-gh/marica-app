import * as React from "react";
import { Button, Text, View, Image } from "react-native";
import { Colors } from "../constant/styles";
import { ScrollView } from "react-native-gesture-handler";

export default function Cerita({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Cerita</Text>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <Image
            source={require("../assets/images/bubu.png")}
            style={{
              width: 144,
              height: 100,
              borderRadius: 16,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Nunito-Bold",
                color: Colors.slate600,
              }}
            >
              Episode pertama ini seru loh
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Nunito-Medium",
                color: Colors.slate400,
              }}
            >
              10:22
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
