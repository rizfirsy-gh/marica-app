import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setAuth,
  setLoading,
  setToken,
  setUserInfo,
} from "../redux/slices/user";
import SignupForm from "../components/forms/SignupForm";
import { Colors } from "../constant/styles";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import LoginForm from "../components/forms/LoginForm";
import { storeUserData } from "../redux/actions/user-action";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Signup = ({ navigation }) => {
  const [login, setLogin] = React.useState(false);
  const windowWidth = Dimensions.get("window").width;

  const dispatch = useDispatch();
  const { isLoading, userInfo, authentication } = useSelector(
    (state) => state.user
  );

  const loginHandler = async (values) => {
    dispatch(setLoading(true));
    await axios
      .post("https://api.marica.id/api/v1/user/login", {
        identifier: values.email,
        password: values.password,
      })
      .then((res) => {
        storeUserData(res.data.data);
        dispatch(setUserInfo(res.data.data));
        navigation.navigate("HomeScreen");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });

    dispatch(setLoading(false));
  };

  const signupHandler = async (values) => {
    dispatch(setLoading(true));
    await axios
      .post("https://api.marica.id/api/v1/user", values)
      .then((res) => {
        storeUserData(res.data.data);
        dispatch(setUserInfo(res.data.data));
        dispatch(setToken(res.data.data.token));
        navigation.navigate("TermCondition");
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    dispatch(setLoading(false));
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#DAFAFF"]} style={styles.bgGradient}>
      <View
        style={{
          position: "absolute",
          bottom: -24,
          flex: 1,
        }}
      >
        <Image
          source={require("../assets/images/background.png")}
          contentFit="contain"
          style={{
            width: windowWidth,
            height: windowWidth / 1.5,
          }}
          placeholder={blurhash}
        />
      </View>
      <View style={styles.top}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            width: 181,
            height: 76,
          }}
        />
        <Text style={styles.text}>
          Media belajar sambil bermain yang relevan untuk anak-anak.
        </Text>
      </View>
      <View style={styles.formContainer}>
        {login ? (
          <LoginForm
            loginHandler={loginHandler}
            switchForm={() => setLogin(false)}
          />
        ) : (
          <SignupForm
            signupHandler={signupHandler}
            switchForm={() => setLogin(true)}
          />
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bgGradient: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    gap: 24,
  },
  top: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: Colors.slate500,
    maxWidth: 250,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16,
    fontFamily: "Nunito-Medium",
  },
  formContainer: {
    flex: 2,
    width: "100%",
    padding: 16,
  },
});

export default Signup;
