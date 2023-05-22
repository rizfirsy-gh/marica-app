import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Dimensions, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { Colors } from "../constant/styles";
import { setUserInfo, setUserLogout } from "../redux/slices/user";
import { deleteUserData } from "../redux/actions/user-action";

function randomInteger() {
  return Math.floor(Math.random() * 10);
}

const number1 = randomInteger();
const number2 = randomInteger();
const result = number1 * number2;

const Profile = () => {
  const [userResult, setUserResult] = React.useState(0);
  const [validate, setValidate] = React.useState(false);
  const windowWidth = Dimensions.get("window").width;

  const navigation = useNavigation();

  const { userInfo, anak } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const namaDepan = userInfo?.nama.split(" ")[0];

  return (
    <LinearGradient
      colors={["#FFFFFF", "#DAFAFF"]}
      style={{
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: 24,
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: -24,
          flex: 1,
        }}
      >
        <Image
          source={require("../assets/images/background.png")}
          contentFit="cover"
          style={{
            width: windowWidth,
            height: windowWidth / 1.5,
          }}
        />
      </View>
      {userResult !== result.toString() ? (
        <View>
          <Text
            style={{
              fontFamily: "Nunito-Medium",
              color: Colors.slate500,
            }}
          >
            Profil adalah zona khusus orang tua. Berapakah hasil perkalian
            berikut?
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginVertical: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: Colors.cyan600,
                  fontFamily: "Nunito-Bold",
                }}
              >
                {number1}
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: Colors.cyan600,
                  fontFamily: "Nunito-Bold",
                }}
              >
                x
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: Colors.cyan600,
                  fontFamily: "Nunito-Bold",
                }}
              >
                {number2}
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: Colors.cyan600,
                  fontFamily: "Nunito-Bold",
                }}
              >
                =
              </Text>
            </View>
            <Formik
              initialValues={{ number: "" }}
              onSubmit={(values) => {
                setUserResult(values.number);
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{ gap: 8 }}>
                  <TextInput
                    inputMode="numeric"
                    placeholder="_ _"
                    onChangeText={handleChange("number")}
                    onBlur={handleBlur("number")}
                    value={values.number}
                    style={{
                      paddingHorizontal: 24,
                      paddingVertical: 16,
                      backgroundColor: "#fff",
                      width: 250,
                      borderWidth: 2,
                      borderColor: Colors.slate300,
                      borderRadius: 16,
                    }}
                  />
                  {!validate && (
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: "Nunito-Medium",
                        color: "red",
                      }}
                    >
                      Isi dengan benar!
                    </Text>
                  )}
                  <View
                    style={{
                      borderRadius: 16,
                      overflow: "hidden",
                    }}
                  >
                    <Pressable onPress={handleSubmit}>
                      <LinearGradient colors={["#0891B2", "#22D3EE"]}>
                        <Text
                          style={{
                            fontFamily: "Nunito-Medium",
                            width: "100%",
                            paddingVertical: 16,
                            paddingHorizontal: 24,
                            color: "#fff",
                            textAlign: "center",
                          }}
                        >
                          Submit
                        </Text>
                      </LinearGradient>
                    </Pressable>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            gap: 8,
          }}
        >
          <Pressable onPress={() => navigation.navigate("UserInformation")}>
            <View
              style={{
                width: 350,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: Colors.slate200,
                borderWidth: 2,
                borderColor: "#fff",
                padding: 16,
                borderRadius: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 16,
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/images/profile.png")}
                  style={{
                    width: 42,
                    height: 42,
                    backgroundColor: Colors.slate400,
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
                  {namaDepan}
                </Text>
              </View>
              <Image
                source={require("../assets/icons/right-arrow.png")}
                style={{
                  width: 6,
                  height: 12,
                }}
              />
            </View>
          </Pressable>
          <View
            style={{
              width: 350,
              backgroundColor: Colors.slate200,
              borderWidth: 2,
              borderColor: "#fff",
              padding: 16,
              borderRadius: 16,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                paddingVertical: 16,
              }}
              onPress={() => navigation.navigate("Transaksi")}
            >
              <Image
                source={require("../assets/icons/invoice.png")}
                style={{
                  width: 14,
                  height: 18,
                }}
              />
              <Text
                style={{
                  fontFamily: "Nunito-Medium",
                  color: Colors.slate500,
                  fontSize: 16,
                }}
              >
                Transaksi
              </Text>
            </Pressable>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                paddingVertical: 16,
              }}
              onPress={() => navigation.navigate("TentangKami")}
            >
              <Image
                source={require("../assets/icons/building.png")}
                style={{
                  width: 14,
                  height: 18,
                }}
              />
              <Text
                style={{
                  fontFamily: "Nunito-Medium",
                  color: Colors.slate500,
                  fontSize: 16,
                }}
              >
                Tentang kami
              </Text>
            </Pressable>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                paddingVertical: 16,
              }}
              onPress={() => navigation.navigate("Feedback")}
            >
              <Image
                source={require("../assets/icons/comments.png")}
                style={{
                  width: 17,
                  height: 14,
                }}
              />
              <Text
                style={{
                  fontFamily: "Nunito-Medium",
                  color: Colors.slate500,
                  fontSize: 16,
                }}
              >
                Beri kami masukan
              </Text>
            </Pressable>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                paddingVertical: 16,
              }}
              onPress={() => {
                dispatch(setUserLogout());
                deleteUserData();
                navigation.navigate("Welcome");
              }}
            >
              <Image
                source={require("../assets/icons/logout.png")}
                style={{
                  width: 14,
                  height: 14,
                }}
              />
              <Text
                style={{
                  fontFamily: "Nunito-Medium",
                  color: Colors.slate500,
                  fontSize: 16,
                }}
              >
                Logout
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </LinearGradient>
  );
};

export default Profile;
