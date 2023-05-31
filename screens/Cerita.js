import * as React from "react";
import { dummyCerita } from "../assets/media/cerita";
import { Button, Text, View, Image, Pressable } from "react-native";
import { Colors } from "../constant/styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function Cerita({ navigation }) {
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
          Marica punya banyak cerita seru untuk kamu.
        </Text>
        <TextInput
          placeholder="Cari cerita..."
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
          dummyCerita.map((cerita) => (
            <View
              key={cerita.title}
              style={{
                paddingTop: 24,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Nunito-Bold",
                  color: Colors.slate50,
                  padding: 6,
                  borderRadius: 6,
                  backgroundColor: Colors.cyan600,
                  marginBottom: 16,
                  marginTop: 24,
                  textAlign: "center",
                }}
              >
                {cerita.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 16,
                  justifyContent: "center",
                }}
              >
                {cerita.episodes.map((episode) => (
                  <View
                    key={episode.title}
                    style={{
                      flexDirection: "row",
                      gap: 16,
                      marginTop: 8,
                    }}
                  >
                    <Pressable
                      onPress={() =>
                        navigation.navigate("VideoDetails", {
                          videoId: episode.youtubeId,
                        })
                      }
                    >
                      <View
                        style={{
                          maxWidth: 170,
                          height: 160,
                          padding: 16,
                          borderRadius: 16,
                          backgroundColor: Colors.cyan100,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 8,
                          overflow: "hidden",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Nunito-Medium",
                            color: Colors.cyan800,
                            textAlign: "center",
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1000,
                            backgroundColor: Colors.slate100,
                            padding: 8,
                            height: 60,
                            borderRadius: 16,
                          }}
                        >
                          {episode.title.length > 35
                            ? episode.title.slice(0, 35) + "..."
                            : episode.title}
                        </Text>
                        <Image
                          source={cerita.thumbnail}
                          resizeMode="contain"
                          resizeMethod="resize"
                          style={{
                            width: 480,
                            height: 160,
                          }}
                        />
                      </View>
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
