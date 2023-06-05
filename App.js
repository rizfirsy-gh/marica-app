import "react-native-gesture-handler";
import { Colors } from "./constant/styles";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Musik from "./screens/Musik";
import Aktifitas from "./screens/Aktifitas";
import Cerita from "./screens/Cerita";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import TermCondition from "./screens/TermCondition";
import BuatAkunAnak from "./screens/BuatAkunAnak";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigation from "./components/widgets/TabNavigation";
import Profile from "./screens/Profile";
import VideoDetails from "./screens/VideoDetails";
import Transaksi from "./screens/Transaksi";
import TentangKami from "./screens/TentangKami";
import Feedback from "./screens/Feedback";
import ResetPassword from "./screens/ResetPassword";
import EditUserInformation from "./screens/EditUserInformation";
import { Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import UserInformation from "./screens/UserInformation";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function HomeScreen({ navigation }) {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBar={TabNavigation.bind(navigation)}
      screenOptions={{
        header: () => (
          <View
            style={{
              padding: 16,
              paddingTop: 40,
              paddingBottom: 0,
              backgroundColor: "#fff",
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 4,
                height: 40,
              }}
              onPress={() => navigation.navigate("Profile")}
            >
              <Image
                source={require("./assets/images/profile.png")}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Nunito-SemiBold",
                  color: Colors.slate700,
                }}
              >
                {userInfo && userInfo.essentials.username
                  ? userInfo.essentials.username
                  : "Teman Rica"}
              </Text>
            </Pressable>
          </View>
        ),
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cerita" component={Cerita} />
      <Tab.Screen name="Musik" component={Musik} />
      <Tab.Screen name="Aktifitas" component={Aktifitas} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-MediumItalic": require("./assets/fonts/Nunito-MediumItalic.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-SemiBoldItalic": require("./assets/fonts/Nunito-SemiBoldItalic.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-BoldItalic": require("./assets/fonts/Nunito-BoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* //TODO: do custom headers for each screen */}
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="TermCondition"
              component={TermCondition}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="Buat akun anak"
              component={BuatAkunAnak}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                header: () => null,
              }}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen
              name="VideoDetails"
              component={VideoDetails}
              options={({ route, navigation }) => {
                return {
                  title: "Kembali",
                };
              }}
            />
            <Stack.Screen
              name="Transaksi"
              component={Transaksi}
              options={({ route, navigation }) => {
                return {
                  title: "Kembali",
                };
              }}
            />
            <Stack.Screen
              name="TentangKami"
              component={TentangKami}
              options={({ route, navigation }) => {
                return {
                  title: "Kembali",
                };
              }}
            />
            <Stack.Screen
              name="Feedback"
              component={Feedback}
              options={({ route, navigation }) => {
                return {
                  title: "Kembali",
                };
              }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{
                header: () => null,
              }}
            />
            <Stack.Screen
              name="UserInformation"
              component={UserInformation}
              options={{
                title: "User Information",
              }}
            />
            <Stack.Screen
              name="EditUserInfo"
              component={EditUserInformation}
              options={{
                title: "Ubah Information",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
