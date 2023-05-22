import React from "react";
import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import { Image } from "expo-image";
import { Colors } from "../constant/styles";
import { useSelector } from "react-redux";
import Button from "../components/buttons/Button";

const UserInformation = () => {
  const [tab, setTab] = React.useState(false);
  const { userInfo } = useSelector((state) => state.user);
  console.log("tab", tab);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
    >
      <View
        style={{
          gap: 16,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/profile.png")}
          style={{
            width: 150,
            height: 150,
            backgroundColor: Colors.cyan600,
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            fontFamily: "Nunito-Medium",
            fontSize: 24,
            color: Colors.slate600,
          }}
        >
          {userInfo?.nama}
        </Text>
      </View>
      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{
              backgroundColor: `${tab ? Colors.cyan400 : null}`,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}
            onPress={() => setTab(false)}
          >
            <Text
              style={{
                padding: 16,
                color: "#fff",
              }}
            >
              Informasi Pengguna
            </Text>
          </Pressable>
          <Pressable
            style={{
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              borderWidth: 2,
              borderColor: Colors.cyan400,
            }}
            onPress={() => setTab(true)}
          >
            <Text
              style={{
                padding: 16,
                color: Colors.cyan400,
              }}
            >
              Data anak
            </Text>
          </Pressable>
        </View>
        {!tab ? (
          <View
            style={{
              gap: 16,
              backgroundColor: Colors.slate50,
              padding: 16,
              borderWidth: 2,
              borderColor: Colors.cyan400,
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
              borderBottomLeftRadius: 16,
              flex: 1,
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "Nunito-Bold",
                  fontSize: 16,
                  color: Colors.slate700,
                }}
              >
                Kode Unik
              </Text>
              <Text
                style={{
                  fontFamily: "Nunito-Medium",
                  fontSize: 16,
                  color: Colors.slate400,
                }}
              >
                {userInfo._id}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "Nunito-Bold",
                  fontSize: 16,
                  color: Colors.slate700,
                }}
              >
                Username
              </Text>
              <Text
                style={{
                  fontFamily: "Nunito-Medium",
                  fontSize: 16,
                  color: Colors.slate400,
                }}
              >
                {userInfo.essentials.username}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "Nunito-Bold",
                  fontSize: 16,
                  color: Colors.slate700,
                }}
              >
                Nama
              </Text>
              <Text
                style={{
                  fontFamily: "Nunito-Medium",
                  fontSize: 16,
                  color: Colors.slate400,
                }}
              >
                {userInfo.nama}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "Nunito-Bold",
                  fontSize: 16,
                  color: Colors.slate700,
                }}
              >
                Email
              </Text>
              <Text
                style={{
                  fontFamily: "Nunito-Medium",
                  fontSize: 16,
                  color: Colors.slate400,
                }}
              >
                {userInfo.email}
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={{
              minHeight: 300,
              gap: 16,
              backgroundColor: Colors.slate50,
              padding: 16,
              borderWidth: 2,
              borderColor: Colors.cyan400,
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
              borderBottomLeftRadius: 16,
              flex: 1,
            }}
          >
            <View>
              {userInfo.essentials.kidsAnalytics.length <= 0 ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    gap: 16,
                  }}
                >
                  <Image
                    source={require("../assets/images/empty.png")}
                    style={{
                      width: 140,
                      height: 210,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "Nunito-Bold",
                      fontSize: 20,
                      color: Colors.slate500,
                    }}
                  >
                    Belum ada cerita {":("}
                  </Text>
                </View>
              ) : (
                userInfo.essentials.kidsAnalytics
              )}
            </View>
          </View>
        )}
      </ScrollView>
      <Button variant="primary">Ubah</Button>
    </View>
  );
};

export default UserInformation;

// const userinf = {
//   _id: "646ad27973febfd1b835cb51",
//   email: "rizky_firman_syah@outlook.com",
//   essentials: {
//     dataBilling: [],
//     kidsAnalytics: [],
//     password: "$2a$05$LCjJYd7MAv./lszzXlhxje/nK8tjijvGrhMPzyQHCFTq4SEY4PXWa",
//     username: "rizkyfirmansyah75",
//   },
//   imageID: "profile.png",
//   nama: "Rizky F",
//   provider: "local",
//   token:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmFkMjc5NzNmZWJmZDFiODM1Y2I1MSIsImlhdCI6MTY4NDcyNTYwOCwiZXhwIjoxNjg0ODk4NDA4fQ.DUMJxMwN_Ig3iwcPnW9p86jdm8yd4lVD_fLKubOO0iY",
//   userType: "orangtua",
//   validated: false,
// };
