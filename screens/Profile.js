import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, Dimensions } from "react-native";
import { Colors } from "../constant/styles";
import { TextInput } from "react-native";
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

  React.useEffect(() => {}, [userResult]);

  const submitNumberHandler = () => {
    userResult === result ? setValidate(true) : setValidate(false);
    console.log(validate);
  };

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
        <View>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 16,
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
            <TextInput
              placeholder="_  _"
              onChangeText={(input) => {
                console.log("input", input);
                setUserResult(input);
              }}
              value={userResult}
              style={{
                borderWidth: 2,
                borderColor: Colors.slate300,
                borderRadius: 16,
                width: "70%",
                paddingVertical: 16,
                paddingHorizontal: 24,
                fontFamily: "Nunito-Bold",
                fontSize: 24,
                color: Colors.cyan600,
              }}
            />
          </View>
          <Button variant="primary" onPress={submitNumberHandler}>
            Submit
          </Button>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Profile;
