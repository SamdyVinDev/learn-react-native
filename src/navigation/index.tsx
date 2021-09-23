import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigation from "./home_navigation";
import ProfileNavigation from "./profile_navigation";

const MainTab = createMaterialBottomTabNavigator();

export default function MainTabNavigation() {
  return (
    <MainTab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: any;

          if (route.name == "Home") {
            iconName = focused ? "home" : "home-outline";
          }
          if (route.name == "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgrey",
      })}
    >
      <MainTab.Screen name="Home" component={HomeNavigation} />
      <MainTab.Screen name="Profile" component={ProfileNavigation} />
    </MainTab.Navigator>
  );
}
