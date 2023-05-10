import React from "react";
import { Formik } from "formik";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import { Colors } from "../constant/styles";
import Button from "../components/buttons/Button";

function randomInteger() {
  return Math.floor(Math.random() * 10);
}

const number1 = randomInteger();
const number2 = randomInteger();
const result = number1 * number2;
console.log("result", result);

const Profile = () => {
  const [userResult, setUserResult] = React.useState(0);
  const [validate, setValidate] = React.useState(false);
  const windowWidth = Dimensions.get("window").width;

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
          bottom: 0,
          flex: 1,
        }}
      >
        <Image
          source={require("../assets/images/background.png")}
          resizeMode="stretch"
          style={{
            width: windowWidth,
            height: 300,
          }}
        />
      </View>

      {userResult !== result.toString() && (
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
              alignItems: "center",
              marginVertical: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
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
      )}
    </LinearGradient>
  );
};

export default Profile;
