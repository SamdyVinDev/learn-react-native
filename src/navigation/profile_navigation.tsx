import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "../screens/profile_screen";

const ProfileStack = createNativeStackNavigator();

export default function ProfileNavigation() {
  return (
    <ProfileStack.Navigator initialRouteName={"Index"}>
      <ProfileStack.Screen
        name="Index"
        component={ProfileScreen}
        options={{ headerTitle: "Profile" }}
      />
    </ProfileStack.Navigator>
  );
}
