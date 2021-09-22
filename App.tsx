import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import MainTabNavigation from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigation />
      <StatusBar style={"auto"} />
    </NavigationContainer>
  );
}
