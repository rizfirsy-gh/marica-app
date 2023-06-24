import React from "react";
import { useSelector } from "react-redux";
import { Colors } from "../../constant/styles";
import { TextInput, View, Text } from "react-native";
import Button from "../buttons/Button";
import { Formik } from "formik";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  nama: yup.string().required("Nama perlu dimasukkan"),
  email: yup
    .string()
    .email("Email kurang valid")
    .required("Email perlu dimasukkan"),
  password: yup
    .string()
    .min(
      8,
      "⚠️ Password harus terdiri minimal 8 karakter huruf kombinasi antara: huruf besar, hurus kecil, angka, and simbol."
    )
    .required("Password perlu dibuat."),
});

const SignupForm = ({ signupHandler, switchForm }) => {
  const { isLoading } = useSelector((state) => state.user);
  return (
    <Formik
      initialValues={{ nama: "", email: "", password: "" }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => signupHandler(values)}
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
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="🧕🏻 Masukkan nama kamu"
            onChangeText={handleChange("nama")}
            onBlur={handleBlur("nama")}
            value={values.nama}
          />
          {errors.nama && touched.nama && (
            <Text style={styles.error}>{errors.nama}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="📧 Masukkan email kamu"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="🔑 Buat password"
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
              Buat akun
            </Button>
          )}
          <Button onPress={() => switchForm()} variant="secondary">
            Masuk
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
    width: 400,
    maxWidth: "100%",
  },
  loginButton: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
  },
  error: {
    color: Colors.amber600,
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.amber50,
    borderWidth: 2,
    borderColor: Colors.amber600,
    width: "100%",
  },
};

export default SignupForm;
