import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/home_screen";

const HomeStack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <HomeStack.Navigator initialRouteName={"Index"}>
      <HomeStack.Screen
        name="Index"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
    </HomeStack.Navigator>
  );
}
