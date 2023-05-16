import React from "react";
import { Colors } from "../constant/styles";
import Button from "../components/buttons/Button";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const TermCondition = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
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
      <View style={styles.termConditionContainer}>
        <ScrollView style={styles.termConditionText}>
          <Text
            style={{
              fontFamily: "Nunito-Bold",
              color: Colors.slate800,
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            Kebijakan Privasi
          </Text>
          <Text style={styles.text}>
            Kami, PT Sebangku Jaya Abadi, sangat peduli terhadap privasi
            pengguna aplikasi kami. Dalam kebijakan privasi ini, kami
            menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi
            informasi pribadi Anda saat Anda menggunakan aplikasi kami. Dengan
            menggunakan aplikasi kami, Anda menyetujui kebijakan privasi ini dan
            pengumpulan serta penggunaan informasi Anda sesuai dengan kebijakan
            ini.
          </Text>
          <Text style={styles.heading}>
            1. Jenis informasi yang kami kumpulkan
          </Text>
          <Text style={styles.text}>
            Kami dapat mengumpulkan informasi pribadi seperti nama, alamat
            email, nomor telepon, dan informasi pembayaran ketika Anda mendaftar
            dan menggunakan aplikasi kami. Kami juga dapat mengumpulkan
            informasi anonim seperti penggunaan aplikasi, jenis perangkat yang
            digunakan, informasi geografis, dan data lainnya yang tidak dapat
            diidentifikasi secara pribadi.
          </Text>
          <Text style={styles.heading}>
            2. Cara kami menggunakan informasi Anda
          </Text>
          <Text style={styles.text}>
            Kami menggunakan informasi pribadi Anda untuk memberikan layanan
            kami, memproses pembayaran, memperbaiki aplikasi kami, mengirimkan
            informasi penting tentang aplikasi kami, dan memberikan dukungan
            pelanggan. Kami juga menggunakan informasi anonim untuk analisis,
            mengembangkan dan meningkatkan aplikasi kami.
          </Text>
          <Text style={styles.heading}>
            3. Bagaimana kami melindungi informasi Anda
          </Text>
          <Text style={styles.text}>
            Kami mengambil tindakan yang tepat untuk melindungi informasi Anda
            dari akses yang tidak sah, perubahan, pengungkapan, atau
            penghapusan. Kami juga menggunakan standar keamanan seperti enkripsi
            SSL untuk melindungi informasi pribadi Anda saat dipindahkan.
          </Text>
          <Text style={styles.heading}>4. Berbagi informasi Anda</Text>
          <Text style={styles.text}>
            Kami tidak akan membagikan informasi pribadi Anda dengan pihak
            ketiga tanpa persetujuan Anda, kecuali jika diperlukan oleh hukum
            atau dalam situasi darurat yang memerlukan tindakan cepat.
          </Text>
          <Text style={styles.heading}>
            5. Perubahan pada kebijakan privasi
          </Text>
          <Text style={styles.text}>
            Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu.
            Kami akan memberi tahu Anda tentang perubahan melalui aplikasi kami
            atau melalui email yang kami kirimkan ke Anda.
          </Text>
          <Text style={styles.heading}>6. Kontak</Text>
          <Text style={styles.text}>
            Jika Anda memiliki pertanyaan atau masalah tentang kebijakan privasi
            ini, silakan hubungi kami melalui email sebangkugames@gmail.com.
          </Text>
          <Text style={styles.text}>
            Dengan menggunakan aplikasi kami, Anda menyetujui kebijakan privasi
            ini dan pengumpulan serta penggunaan informasi Anda sesuai
            dengan kebijakan ini.
          </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
        </ScrollView>
        <Button
          variant="primary"
          onPress={() => navigation.navigate("Buat akun anak")}
        >
          Terima & lanjutkan
        </Button>
      </View>
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
  termConditionContainer: {
    padding: 16,
    flex: 1,
    gap: 16,
    marginTop: 72,
  },
  termConditionText: {
    padding: 16,
    borderWidth: 2,
    borderColor: Colors.slate300,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  text: {
    color: Colors.slate500,
    fontFamily: "Nunito-Medium",
  },
  heading: {
    fontSize: 16,
    color: Colors.cyan600,
    fontFamily: "Nunito-Bold",
    marginTop: 16,
    marginBottom: 8,
  },
});

export default TermCondition;
