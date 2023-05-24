import React from "react";
import axios from "axios";
import { Colors } from "../constant/styles";
import { Image, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Button from "../components/buttons/Button";
import AgeCategories from "../components/forms/AgeCategories";
import { useDispatch, useSelector } from "react-redux";
import { setDataAnak, setLoading } from "../redux/slices/anak";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const BuatAkunAnak = ({ navigation }) => {
  const [namaAnak, setNamaAnak] = React.useState("");
  const [usiaAnak, setUsiaAnak] = React.useState("");

  const [chooseAge, setChooseAge] = React.useState(false);
  function goToAgeOptions() {
    setChooseAge(true);
  }

  const { isLoading, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const chooseAgeHandler = (values) => {
    setUsiaAnak(values);
  };

  //TODO: save data anak and access globally

  const createAnakHandler = async () => {
    dispatch(setLoading(true));
    await axios
      .post(
        "https://api.marica.id/api/v1/user/anak",
        {
          nama: namaAnak,
          usia: usiaAnak,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
      .then((res) => {
        // dispatch(setDataAnak(res.data.data));
        console.log("res anak: ", res);
        navigation.navigate("HomeScreen");
      })
      .catch((err) => {
        console.log(err.response);
      });
    dispatch(setLoading(false));
  };

  const windowWidth = Dimensions.get("window").width;

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
        <Text style={styles.heading}>
          {chooseAge ? "Pilih rentang usia" : "Tambahkan profil anak!"}
        </Text>
        <Text style={styles.text}>
          {chooseAge
            ? `Silahkan pilih kategori usia agar kami dapat menyarankan konten yang relevan dengan ${namaAnak}.`
            : `Untuk memulai, mari buat satu profil anak terlebih dahulu.!`}
        </Text>
      </View>
      {chooseAge ? (
        <View style={styles.form}>
          <AgeCategories chooseAge={chooseAgeHandler} />
          <Button variant="primary" onPress={createAnakHandler}>
            {isLoading ? "Tunggu sebentar..." : "Selesai!"}
          </Button>
        </View>
      ) : (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nama anak"
            value={namaAnak}
            onChangeText={(nama) => setNamaAnak(nama)}
          />
          <Button variant="secondary" onPress={goToAgeOptions}>
            Lanjut
          </Button>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bgGradient: {
    position: "relative",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    gap: 64,
  },
  top: {
    paddingTop: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  form: {
    flex: 2,
    gap: 8,
    padding: 16,
  },
  input: {
    borderWidth: 2,
    fontFamily: "Nunito-Medium",
    color: Colors.slate500,
    borderColor: Colors.slate400,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  heading: {
    color: Colors.slate500,
    maxWidth: 250,
    textAlign: "center",
    marginTop: 16,
    fontFamily: "Nunito-Bold",
    fontSize: 20,
  },
  text: {
    color: Colors.slate500,
    maxWidth: 250,
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "Nunito-Medium",
  },
  formContainer: {
    flex: 2,
    width: "100%",
    padding: 16,
  },
});

export default BuatAkunAnak;

// const resBuatAnak = {
//   config: {
//     adapter: ["xhr", "http"],
//     data: '{"nama":"AA","usia":"5-8"}',
//     env: { Blob: [Function, Blob], FormData: [Function, FormData] },
//     headers: [Object],
//     maxBodyLength: -1,
//     maxContentLength: -1,
//     method: "post",
//     timeout: 0,
//     transformRequest: [[Function, transformRequest]],
//     transformResponse: [[Function, transformResponse]],
//     transitional: {
//       clarifyTimeoutError: false,
//       forcedJSONParsing: true,
//       silentJSONParsing: true,
//     },
//     url: "https://api.marica.id/api/v1/user/anak",
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
//     "content-length": "82",
//     "content-type": "application/json; charset=utf-8",
//     date: "Wed, 24 May 2023 08:00:28 GMT",
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
//       authorization: "Bearer undefined",
//       "content-type": "application/json",
//     },
//     _incrementalEvents: false,
//     _lowerCaseResponseHeaders: {
//       "access-control-allow-origin": "*",
//       "content-length": "82",
//       "content-type": "application/json; charset=utf-8",
//       date: "Wed, 24 May 2023 08:00:28 GMT",
//       etag: 'W/"52-p7m/I7XbtPD2D2QcnLD8jg3An6I"',
//       server: "LiteSpeed",
//       "strict-transport-security":
//         "max-age=31536000; includeSubDomains; preload",
//       vary: "User-Agent",
//       "x-content-type-options": "nosniff",
//       "x-powered-by": "Niagahoster",
//       "x-xss-protection": "1; mode=block",
//     },
//     _method: "POST",
//     _perfKey: "network_XMLHttpRequest_https://api.marica.id/api/v1/user/anak",
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
//     _url: "https://api.marica.id/api/v1/user/anak",
//     readyState: 4,
//     responseHeaders: {
//       "access-control-allow-origin": "*",
//       "content-length": "82",
//       "content-type": "application/json; charset=utf-8",
//       date: "Wed, 24 May 2023 08:00:28 GMT",
//       etag: 'W/"52-p7m/I7XbtPD2D2QcnLD8jg3An6I"',
//       server: "LiteSpeed",
//       "strict-transport-security":
//         "max-age=31536000; includeSubDomains; preload",
//       vary: "User-Agent",
//       "x-content-type-options": "nosniff",
//       "x-powered-by": "Niagahoster",
//       "x-xss-protection": "1; mode=block",
//     },
//     responseURL: "https://api.marica.id/api/v1/user/anak",
//     status: 200,
//     timeout: 0,
//     upload: {},
//     withCredentials: true,
//   },
//   status: 200,
//   statusText: undefined,
// };
