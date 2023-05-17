import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constant/styles";
import { Formik } from "formik";
import * as yup from "yup";
import { Image } from "expo-image";
import Button from "../components/buttons/Button";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, Dimensions, TextInput } from "react-native";
import { useSelector } from "react-redux";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email kurang valid")
    .required("Email perlu dimasukkan"),
});

const ResetPassword = () => {
  const windowWidth = Dimensions.get("window").width;
  const { isLoading } = useSelector((state) => state.user);

  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#FFFFFF", "#DAFAFF"]}
      style={{
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
        }}
      >
        <Image
          source={require("../assets/images/background.png")}
          contentFit="cover"
          style={{
            width: windowWidth,
            height: windowWidth / 1.5,
          }}
          placeholder={blurhash}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Nunito-Bold",
            color: Colors.cyan600,
            marginBottom: 32,
          }}
        >
          Reset password
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Nunito-Medium",
            color: Colors.slate400,
          }}
        >
          Masukkan alamat email yang anda gunakan untuk akun Marica dan kami
          akan mengirim email untuk mengatur ulang password anda.
        </Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => loginHandler(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View
              style={{
                gap: 8,
                marginTop: 16,
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="📧 Masukkan email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
              {isLoading ? (
                <Text
                  style={{
                    color: Colors.slate600,
                    textAlign: "center",
                    padding: 16,
                    backgroundColor: Colors.cyan300,
                    borderRadius: 16,
                    marginVertical: 10,
                  }}
                >
                  Tunggu sebentar...
                </Text>
              ) : (
                <Button onPress={handleSubmit} variant="primary">
                  Kirim
                </Button>
              )}
              <Button
                onPress={() => navigation.navigate("Signup")}
                variant="secondary"
              >
                Kembali
              </Button>
            </View>
          )}
        </Formik>
      </View>
    </LinearGradient>
  );
};

const styles = {
  input: {
    borderWidth: 2,
    borderColor: Colors.slate400,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  loginButton: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
  },
  error: {
    color: "red",
  },
};

export default ResetPassword;
