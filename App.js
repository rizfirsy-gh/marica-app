import "react-native-gesture-handler";
import { Provider } from "react-redux";
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
import HeaderProfile from "./components/widgets/HeaderProfile";
import Profile from "./screens/Profile";
import HeaderBack from "./components/widgets/HeaderBack";
import VideoDetails from "./screens/VideoDetails";
// const forFade = ({ current, next }) => {
//   const opacity = Animated.add(
//     current.progress,
//     next ? next.progress : 0
//   ).interpolate({
//     inputRange: [0, 1, 2],
//     outputRange: [0, 1, 0],
//   });

//   return {
//     leftButtonStyle: { opacity },
//     rightButtonStyle: { opacity },
//     titleStyle: { opacity },
//     backgroundStyle: { opacity },
//   };
// };

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBar={TabNavigation.bind(navigation)}
      screenOptions={{
        header: HeaderProfile.bind(navigation),
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
            <Stack.Screen name="Video" component={VideoDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
