import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../constant/styles";
import UpdateUserInfoForm from "../components/forms/UpdateUserInfoForm";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { Image } from "expo-image";
import { setLoading } from "../redux/slices/user";
import Button from "../components/buttons/Button";

const EditUserInformation = () => {
  const [isEditDataSuccess, setIsEditDataSuccess] = React.useState(false);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  console.log("token", typeof userInfo.token);

  const windowWidth = Dimensions.get("window").width;

  const updateDataHandler = async (values) => {
    const nama = values.nama === "" ? userInfo.nama : values.nama;
    const email = values.email === "" ? userInfo.email : values.email;

    dispatch(setLoading(true));
    await axios
      .put(
        "https://api.marica.id/api/v1/user",
        { nama: nama, email: email },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
      .then((res) => {
        console.log("berhasil ubah data: ", res);
      })
      .catch((error) => {
        if (error.response) {
          console.log("error data: ", error.response.data);
          console.log("error status: ", error.response.status);
          console.log("error header: ", error.response.headers);
        } else if (error.request) {
          console.log("Error request: ", error.request);
        } else {
          console.log("Error message: ", error.message);
        }
        console.log("Error config: ", error.config);
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
          contentFit="cover"
          style={{
            width: windowWidth,
            height: windowWidth / 1.5,
          }}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 16, gap: 24 }}>
        <View
          style={{
            gap: 16,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/profile.png")}
            style={{
              width: 150,
              height: 150,
              backgroundColor: Colors.cyan600,
              borderRadius: 100,
            }}
          />
          <Button variant="secondary">Ubah gambar</Button>
        </View>
        <UpdateUserInfoForm updateHandler={updateDataHandler} />
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
});

export default EditUserInformation;

// const errorSample = {
//   config: {
//     adapter: ["xhr", "http"],
//     data: '{"nama":"Rijal","email":"rizky_firman_syah@outlook.com"}',
//     env: { Blob: [Function, Blob], FormData: [Function, FormData] },
//     headers: [Object],
//     maxBodyLength: -1,
//     maxContentLength: -1,
//     method: "put",
//     timeout: 0,
//     transformRequest: [[Function, transformRequest]],
//     transformResponse: [[Function, transformResponse]],
//     transitional: {
//       clarifyTimeoutError: false,
//       forcedJSONParsing: true,
//       silentJSONParsing: true,
//     },
//     url: "https://api.marica.id/api/v1/user",
//     validateStatus: [Function, validateStatus],
//     xsrfCookieName: "XSRF-TOKEN",
//     xsrfHeaderName: "X-XSRF-TOKEN",
//   },
//   data: {
//     message: "res.status is not a function",
//     stack: "production",
//     type: "TypeError",
//   },
//   headers: {
//     "access-control-allow-origin": "*",
//     "alt-svc":
//       'h3=":443"; ma=2592000, h3-29=":443"; ma=2592000, h3-Q050=":443"; ma=2592000, h3-Q046=":443"; ma=2592000, h3-Q043=":443"; ma=2592000, quic=":443"; ma=2592000; v="43,46"',
//     "content-length": "82",
//     "content-type": "application/json; charset=utf-8",
//     date: "Wed, 24 May 2023 01:24:38 GMT",
//     etag: 'W/"52-p7m/I7XbtPD2D2QcnLD8jg3An6I"',
//     server: "LiteSpeed",
//     "strict-transport-security": "max-age=31536000; includeSubDomains; preload",
//     vary: "User-Agent",
//     "x-content-type-options": "nosniff",
//     "x-powered-by": "Niagahoster",
//     "x-xss-protection": "1; mode=block",
//   },
//   request: {
//     DONE: 4,
//     HEADERS_RECEIVED: 2,
//     LOADING: 3,
//     OPENED: 1,
//     UNSENT: 0,
//     _aborted: false,
//     _cachedResponse: undefined,
//     _hasError: false,
//     _headers: {
//       accept: "application/json, text/plain, */*",
//       "content-type": "application/json",
//     },
//     _incrementalEvents: false,
//     _lowerCaseResponseHeaders: {
//       "access-control-allow-origin": "*",
//       "alt-svc":
//         'h3=":443"; ma=2592000, h3-29=":443"; ma=2592000, h3-Q050=":443"; ma=2592000, h3-Q046=":443"; ma=2592000, h3-Q043=":443"; ma=2592000, quic=":443"; ma=2592000; v="43,46"',
//       "content-length": "82",
//       "content-type": "application/json; charset=utf-8",
//       date: "Wed, 24 May 2023 01:24:38 GMT",
//       etag: 'W/"52-p7m/I7XbtPD2D2QcnLD8jg3An6I"',
//       server: "LiteSpeed",
//       "strict-transport-security":
//         "max-age=31536000; includeSubDomains; preload",
//       vary: "User-Agent",
//       "x-content-type-options": "nosniff",
//       "x-powered-by": "Niagahoster",
//       "x-xss-protection": "1; mode=block",
//     },
//     _method: "PUT",
//     _perfKey: "network_XMLHttpRequest_https://api.marica.id/api/v1/user",
//     _performanceLogger: {
//       _closed: false,
//       _extras: [Object],
//       _pointExtras: [Object],
//       _points: [Object],
//       _timespans: [Object],
//     },
//     _requestId: null,
//     _response:
//       '{"type":"TypeError","message":"res.status is not a function","stack":"production"}',
//     _responseType: "",
//     _sent: true,
//     _subscriptions: [],
//     _timedOut: false,
//     _trackingName: "unknown",
//     _url: "https://api.marica.id/api/v1/user",
//     readyState: 4,
//     responseHeaders: {
//       "access-control-allow-origin": "*",
//       "alt-svc":
//         'h3=":443"; ma=2592000, h3-29=":443"; ma=2592000, h3-Q050=":443"; ma=2592000, h3-Q046=":443"; ma=2592000, h3-Q043=":443"; ma=2592000, quic=":443"; ma=2592000; v="43,46"',
//       "content-length": "82",
//       "content-type": "application/json; charset=utf-8",
//       date: "Wed, 24 May 2023 01:24:38 GMT",
//       etag: 'W/"52-p7m/I7XbtPD2D2QcnLD8jg3An6I"',
//       server: "LiteSpeed",
//       "strict-transport-security":
//         "max-age=31536000; includeSubDomains; preload",
//       vary: "User-Agent",
//       "x-content-type-options": "nosniff",
//       "x-powered-by": "Niagahoster",
//       "x-xss-protection": "1; mode=block",
//     },
//     responseURL: "https://api.marica.id/api/v1/user",
//     status: 401,
//     timeout: 0,
//     upload: {},
//     withCredentials: true,
//   },
//   status: 401,
//   statusText: undefined,
// };
