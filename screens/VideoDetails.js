import React from "react";
import Video from "react-native-video";
import YoutubePlayer from "react-native-youtube-iframe";
import { View, Text, Pressable, Image, FlatList } from "react-native";
import { Colors } from "../constant/styles";
import { ScrollView } from "react-native";

const VideoDetails = ({ route, navigation }) => {
  const { vidId } = route;
  console.log("video", vidId);

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
      }}
    >
      <View>
        <YoutubePlayer height={210} videoId={vidId} />
      </View>
      <Text
        style={{
          fontFamily: "Nunito-Bold",
          color: Colors.slate700,
          fontSize: 24,
        }}
      >
        Judul video
      </Text>
      <Text
        style={{
          fontFamily: "Nunito-Medium",
          color: Colors.slate400,
          fontSize: 14,
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Morbi pharetra adipiscing at
        metus pretium sagittis semper eu. Praesent auctor tellus velit risus
        proin convallis. Tincidunt amet...
      </Text>
      <View
        style={{
          marginVertical: 16,
        }}
      >
        <Text
          style={{
            color: Colors.cyan600,
            fontSize: 20,
            fontFamily: "Nunito-Medium",
          }}
        >
          Episode
        </Text>
        <ScrollView
          style={{
            paddingVertical: 16,
          }}
        >
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
    </View>
  );
};

export default VideoDetails;
