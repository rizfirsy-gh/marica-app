import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import Welcome from "./screens/Welcome";

export default function App() {
  return (
    <View className="flex-1 bg-slate-200 justify-center items-center">
      <Welcome />
      <StatusBar style="auto" />
    </View>
  );
}
