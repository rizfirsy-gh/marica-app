import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../redux/actions/user-action";

import { Colors } from "../../constant/styles";
import { TextInput, View, Text } from "react-native";
import Button from "../buttons/Button";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";

const SignupSchema = yup.object().shape({
  nama: yup.string().required("Nama perlu dimasukkan"),
  email: yup
    .string()
    .email("Email kurang valid")
    .required("Email perlu dimasukkan"),
  password: yup
    .string()
    .min(6, "Panjang password minimal 6 karakter")
    .required("Password perlu dibuat."),
});

const FormikForm = ({ signupHandler }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ nama: "", email: "", password: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values) => dispatch(signup(values))}
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
          <Button onPress={handleSubmit} variant="primary">
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

export default FormikForm;
