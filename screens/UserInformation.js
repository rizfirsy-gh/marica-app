import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  StyleSheet,
} from "react-native";
import { Image } from "expo-image";
import { Colors } from "../constant/styles";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { getAnakData } from "../redux/actions/user-action";
import { setDataAnak } from "../redux/slices/anak";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const UserInformation = () => {
  const [tab, setTab] = React.useState(false);
  const [anak, setAnak] = React.useState("");

  const { userInfo, token } = useSelector((state) => state.user);
  const { dataAnak } = useSelector((state) => state.anak);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getAnakData()
      .then((res) => {
        if (res === null || res === undefined) {
          console.log("res", res);
        } else {
          dispatch(setDataAnak(res));
          setAnak(res);
        }
      })
      .catch((err) => console.log("err", err));
  });

  const navigation = useNavigation();

  const windowWidth = Dimensions.get("window").width;

  return (
    <LinearGradient colors={["#FFFFFF", "#DAFAFF"]} style={styles.bgGradient}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          paddingHorizontal: 16,
          paddingBottom: 16,
          gap: 16,
          position: "relative",
        }}
      >
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
          <Text
            style={{
              fontFamily: "Nunito-Medium",
              fontSize: 24,
              color: Colors.slate600,
            }}
          >
            {userInfo?.nama}
          </Text>
        </View>
        <ScrollView>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={{
                backgroundColor: `${!tab ? Colors.cyan400 : Colors.slate50}`,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderWidth: 2,
                borderColor: Colors.cyan400,
              }}
              onPress={() => setTab(false)}
            >
              <Text
                style={{
                  padding: 16,
                  color: `${!tab ? Colors.slate50 : Colors.cyan400}`,
                }}
              >
                Informasi Pengguna
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: `${tab ? Colors.cyan400 : Colors.slate50}`,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderWidth: 2,
                borderColor: Colors.cyan400,
              }}
              onPress={() => setTab(true)}
            >
              <Text
                style={{
                  padding: 16,
                  color: `${tab ? Colors.slate50 : Colors.cyan400}`,
                }}
              >
                Data anak
              </Text>
            </Pressable>
          </View>
          {!tab ? (
            <View
              style={{
                gap: 16,
                paddingVertical: 16,
                padding: 16,
                borderRadius: 16,
                borderTopLeftRadius: 0,
                borderWidth: 2,
                borderColor: Colors.cyan400,
                transform: [
                  {
                    translateY: -2,
                  },
                ],
                backgroundColor: "#fff",
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "Nunito-Bold",
                    fontSize: 16,
                    color: Colors.slate700,
                  }}
                >
                  Kode Unik
                </Text>
                <Text
                  style={{
                    fontFamily: "Nunito-Medium",
                    fontSize: 16,
                    color: Colors.slate400,
                  }}
                >
                  {userInfo._id}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Nunito-Bold",
                    fontSize: 16,
                    color: Colors.slate700,
                  }}
                >
                  Username
                </Text>
                <Text
                  style={{
                    fontFamily: "Nunito-Medium",
                    fontSize: 16,
                    color: Colors.slate400,
                  }}
                >
                  {userInfo.essentials.username}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Nunito-Bold",
                    fontSize: 16,
                    color: Colors.slate700,
                  }}
                >
                  Nama
                </Text>
                <Text
                  style={{
                    fontFamily: "Nunito-Medium",
                    fontSize: 16,
                    color: Colors.slate400,
                  }}
                >
                  {userInfo.nama}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Nunito-Bold",
                    fontSize: 16,
                    color: Colors.slate700,
                  }}
                >
                  Email
                </Text>
                <Text
                  style={{
                    fontFamily: "Nunito-Medium",
                    fontSize: 16,
                    color: Colors.slate400,
                  }}
                >
                  {userInfo.email}
                </Text>
              </View>
            </View>
          ) : (
            <View
              style={{
                gap: 16,
                paddingVertical: 16,
                padding: 16,
                borderRadius: 16,
                borderTopLeftRadius: 0,
                borderWidth: 2,
                borderColor: Colors.cyan400,
                transform: [
                  {
                    translateY: -2,
                  },
                ],
                backgroundColor: "#fff",
              }}
            >
              <View>
                {!dataAnak ||
                  (dataAnak.length === 0 && (
                    <View>
                      <Text
                        style={{
                          fontFamily: "Nunito-Medium",
                          fontSize: 16,
                          color: "#ef4444",
                          backgroundColor: "#fecaca",
                          padding: 16,
                          borderRadius: 16,
                        }}
                      >
                        Gagal mengambil data atau mungkin data tidak ada.
                      </Text>
                    </View>
                  ))}
                {dataAnak.map((anak) => (
                  <View
                    key={anak._id}
                    style={{
                      flexDirection: "row",
                      padding: 16,
                      backgroundColor: Colors.cyan100,
                      borderRadius: 16,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Nunito-Bold",
                        fontSize: 20,
                        fontFamily: "Nunito-Bold",
                        color: Colors.cyan700,
                      }}
                    >
                      {anak.nama}
                    </Text>
                    <View>
                      <Text
                        style={{
                          fontFamily: "Nunito-Bold",
                          fontSize: 14,
                          fontFamily: "Nunito-Medium",
                          color: Colors.cyan700,
                        }}
                      >
                        {anak.poin}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}
        </ScrollView>
        <Button
          variant="primary"
          onPress={() => navigation.navigate("EditUserInfo")}
        >
          Ubah
        </Button>
      </View>
    </LinearGradient>
  );
};

export default UserInformation;

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

const contohDataAnak = {
  character: {
    aksesorisKepala: [],
    aksesorisMuka: [],
    aksesorisTangan: [],
    baju: [],
    celana: [],
    gender: "male",
  },
  imageID: "",
  likes: [],
  nama: "dian",
  poin: 0,
  rentangUsia: "0-4",
};
