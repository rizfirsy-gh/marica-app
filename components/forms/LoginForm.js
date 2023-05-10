import React from "react";
import { useSelector } from "react-redux";
import { Colors } from "../../constant/styles";
import { TextInput, View, Text } from "react-native";
import Button from "../buttons/Button";
import { Formik } from "formik";
import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email kurang valid")
    .required("Email perlu dimasukkan"),
  password: yup
    .string()
    .min(6, "Panjang password minimal 6 karakter")
    .required("Password perlu dibuat."),
});

const LoginForm = ({ loginHandler, switchForm }) => {
  const { isLoading } = useSelector((state) => state.user);
  return (
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
            flex: 1,
            gap: 8,
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
          <TextInput
            style={styles.input}
            textContentType="password"
            placeholder="🔑 Masukkan password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          {errors.password && touched.password && (
            <Text style={styles.error}>{errors.password}</Text>
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
              Masuk
            </Button>
          )}
          <Button onPress={() => switchForm()} variant="secondary">
            Buat akun
          </Button>
        </View>
      )}
    </Formik>
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

export default LoginForm;
