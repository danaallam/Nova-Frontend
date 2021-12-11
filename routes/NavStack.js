import React from "react";
import { createStackNavigator } from "@react-navigation//stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { Text, View } from "react-native";
import Start from "../screens/Start";

const Stack = createStackNavigator();

export default function NavStack({ initialRoute = "Start" }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
