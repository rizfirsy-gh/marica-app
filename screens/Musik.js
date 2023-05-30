import * as React from "react";
import { dummyMusik } from "../assets/media/musik";
import { Button, Text, View, Image, Pressable, FlatList } from "react-native";
import { Colors } from "../constant/styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function Musik({ navigation }) {
  const [searchPhrase, setSearchPhrase] = React.useState("");

  return (
    <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#fff" }}>
      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            color: Colors.slate400,
            fontFamily: "Nunito-Medium",
            fontSize: 16,
            marginTop: 16,
            marginBottom: 8,
          }}
        >
          Marica punya banyak musik seru untuk kamu.
        </Text>
        <TextInput
          placeholder="Cari musik..."
          style={{
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderWidth: 2,
            borderColor: Colors.slate400,
            borderRadius: 16,
          }}
          value={searchPhrase}
          onChangeText={(phrase) => setSearchPhrase(phrase)}
        />
      </View>
      <ScrollView>
        {searchPhrase === "" || searchPhrase === " " ? (
          dummyMusik.map((musik) => (
            <View
              key={musik.title}
              style={{
                paddingTop: 24,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Nunito-SemiBold",
                  color: Colors.slate700,
                  marginBottom: 8,
                }}
              >
                {musik.title}
              </Text>
              <View style={{ gap: 8 }}>
                {musik.playlist.map((list) => (
                  <View key={list.title}>
                    <Pressable
                      onPress={() =>
                        navigation.navigate("VideoDetails", {
                          videoId: list.youtubeId,
                        })
                      }
                      style={{
                        flexDirection: "row",
                        gap: 8,
                        backgroundColor: Colors.slate100,
                        padding: 8,
                        borderRadius: 16,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          height: 60,
                          width: 60,
                          padding: 16,
                          borderRadius: 16,
                          backgroundColor: Colors.cyan100,
                          borderWidth: 2,
                          borderColor: Colors.cyan500,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <Image
                          source={require("../assets/images/music-thumbnail.png")}
                          resizeMode="contain"
                          resizeMethod="resize"
                          style={{
                            width: 60 / 2,
                            height: 60 / 2,
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          fontFamily: "Nunito-Bold",
                          color: Colors.cyan800,
                        }}
                      >
                        {list.title}
                      </Text>
                    </Pressable>
                  </View>
                ))}
              </View>
            </View>
          ))
        ) : (
          <Text
            style={{
              fontFamily: "Nunito-Bold",
              color: Colors.slate600,
              textAlign: "center",
              padding: 16,
              backgroundColor: Colors.slate100,
              borderRadius: 1000,
            }}
          >
            Tidak ditemukan
          </Text>
        )}
        <View
          style={{
            height: 50,
            width: "100%",
          }}
        ></View>
      </ScrollView>
    </View>
  );
}
