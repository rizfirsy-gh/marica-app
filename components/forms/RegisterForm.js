import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Button from "../buttons/Button";

const RegisterForm = () => {
  //TODO: make the form working correctly
  return (
    <View style={{ gap: 8 }}>
      <TextInput
        style={styles.inputEmail}
        placeholder="Masukkan email"
        autoComplete="email"
        keyboardType="email-address"
      />
      <TextInput placeholder="Buat password baru" style={styles.inputEmail} />
      <TextInput placeholder="Ketik ulang password" style={styles.inputEmail} />
      <Button variant="primary">Buat akun</Button>
    </View>
  );
};

const styles = {
  inputEmail: {
    borderWidth: 2,
    borderColor: "#64748B",
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
};
export default RegisterForm;
