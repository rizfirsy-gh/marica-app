import React from "react";
import Video from "react-native-video";
import YoutubePlayer from "react-native-youtube-iframe";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { Colors } from "../constant/styles";
import { ScrollView } from "react-native";

const VideoDetails = ({ route, navigation }) => {
  const { videoId, videoTitle } = route.params;

  return (
    <View
      style={{
        backgroundColor: "#fff",
      }}
    >
      <View>
        <YoutubePlayer height={220} videoId={videoId} />
      </View>
      <View style={{ padding: 16 }}>
        <Text
          style={{
            fontFamily: "Nunito-Bold",
            color: Colors.slate700,
            fontSize: 24,
          }}
        >
          {videoTitle}
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
      </View>
      <View style={{ padding: 16 }}>
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
          {/* <View
            style={{
              flexDirection: "row",
              gap: 8,
              margi nBottom: 16,
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
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              gap: 24,
              padding: 24,
            }}
          >
            <Image
              source={require("../assets/images/empty.png")}
              objectFit="cover"
              style={{
                width: 100,
                height: 138,
              }}
            />
            <Text
              style={{
                fontFamily: "Nunito-Bold",
                fontSize: 20,
                color: Colors.slate500,
              }}
            >
              Belum ada episode {":("}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default VideoDetails;
