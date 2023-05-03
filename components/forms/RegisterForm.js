import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Button from "../buttons/Button";

const RegisterForm = ({ onAuthenticate }) => {
  const [isLogin, setIsLogin] = React.useState(false);
  //TODO: make the form working correctly
  const [userInputs, setUserInputs] = React.useState({
    email: "",
    password: "",
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setUserInputs((currentValues) => {
      return {
        ...currentValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function createUserHandler() {
    onAuthenticate({
      email: userInputs.email,
      password: userInputs.password,
    });
  }

  function loginUserHandler() {
    setIsLogin(!isLogin);
  }

  return (
    <View style={{ gap: 8 }}>
      <TextInput
        style={styles.input}
        placeholder="Masukkan email"
        autoComplete="email"
        keyboardType="email-address"
        onChangeText={inputChangedHandler.bind(this, "email")}
      />
      <TextInput
        placeholder={isLogin ? "Masukkan password" : "Buat password baru"}
        style={styles.input}
        onChangeText={inputChangedHandler.bind(this, "password")}
      />
      {!isLogin && (
        <TextInput placeholder="Ketik ulang password" style={styles.input} />
      )}
      <Button variant="primary" onPress={createUserHandler}>
        {isLogin ? "Masuk" : "Buat akun"}
      </Button>
      <View style={styles.loginButton}>
        <Text>{isLogin ? "Sudah punya akun?" : "Belum punya akun?"}</Text>
        <Button variant={"tertiary"} onPress={loginUserHandler}>
          {isLogin ? "Buat akun" : "Masuk"}
        </Button>
      </View>
    </View>
  );
};

const styles = {
  input: {
    borderWidth: 2,
    borderColor: "#94A3B8",
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
};
export default RegisterForm;
