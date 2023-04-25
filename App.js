import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import Welcome from "./screens/Welcome";
import { StatusBar } from "expo-status-bar";

//TODO: use splashcreen better after slicing the homepage

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
      <View className="flex-1 bg-slate-200 justify-center items-center">
        <NavigationContainer>
          <Welcome />
        </NavigationContainer>
      </View>
    </>
  );
}
