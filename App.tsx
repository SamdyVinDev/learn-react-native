import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainTabNavigation from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigation />
      <StatusBar style={"auto"} />
    </NavigationContainer>
  );
}
