import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Button, Animated } from "react-native";
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
import FormikForm from "./components/forms/FormikForm";
import TabNavigation from "./components/widgets/TabNavigation";
import HeaderProfile from "./components/widgets/HeaderProfile";
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

export function HomeScreen() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" tabBar={TabNavigation}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: HeaderProfile,
        }}
      />
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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        {/* //TODO: do custom headers for each screen */}
        {/* <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerLeft: () => null, headerTitle: () => null }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            // headerStyleInterpolator: forFade,
            headerLeft: () => null,
            headerTitle: () => null,
          }}
        />
        <Stack.Screen
          name="TermCondition"
          component={TermCondition}
          options={{
            // headerStyleInterpolator: forFade,
            headerLeft: () => null,
            headerTitle: () => null,
          }}
        />
        <Stack.Screen
          name="Buat akun anak"
          component={BuatAkunAnak}
          options={{
            header: () => null,
            // headerStyleInterpolator: forFade,
          }}
        /> */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            header: () => null,
            // headerStyleInterpolator: forFade,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
