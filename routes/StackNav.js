import React from "react";
import { createStackNavigator } from "@react-navigation//stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Start from "../screens/Start";
import Home from "./TabNav";

const Stack = createStackNavigator();

export default function StackNav({ initialRoute = "Start" }) {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Account" component={Home} />
    </Stack.Navigator>
  );
}
