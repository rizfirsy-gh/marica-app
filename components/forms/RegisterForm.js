import React from "react";
import axios from "axios";
import { View, TextInput, StyleSheet } from "react-native";
import Button from "../buttons/Button";

const RegisterForm = () => {
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

  function buttonHandler() {
    console.log(userInputs.email);
    console.log(userInputs.password);
    axios
      .post("marica-backend.vercel.app/api/v1/user", userInputs)
      .then(function (response) {
        console.log(response);
      })
      .catch((error) => console.log("error", error));
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
        placeholder="Buat password baru"
        style={styles.input}
        onChangeText={inputChangedHandler.bind(this, "password")}
      />
      <TextInput placeholder="Ketik ulang password" style={styles.input} />
      <Button variant="primary" onPress={buttonHandler}>
        Buat akun
      </Button>
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
};
export default RegisterForm;
