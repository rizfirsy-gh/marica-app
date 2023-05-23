import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Colors } from "../../constant/styles";
import { TextInput, View, Text } from "react-native";
import Button from "../buttons/Button";
import { Formik } from "formik";
import * as yup from "yup";

const UpdateUserInfoForm = ({ updateHandler }) => {
  const { isLoading, userInfo } = useSelector((state) => state.user);

  return (
    <Formik
      initialValues={{
        nama: "",
        email: "",
      }}
      onSubmit={async (values) => updateHandler(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View
          style={{
            flex: 1,
            gap: 8,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder={`Ubah nama`}
            onChangeText={handleChange("nama")}
            onBlur={handleBlur("nama")}
            value={values.nama}
          />
          <TextInput
            style={styles.input}
            placeholder={`Ubah email`}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
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
              Simpan perubahan
            </Button>
          )}
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

export default UpdateUserInfoForm;
