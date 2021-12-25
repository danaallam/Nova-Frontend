import React from "react";
import { createStackNavigator } from "@react-navigation//stack";
import Start from "../screens/Start";
import DesignerLogin from "../screens/DesignerLogin";
import DesTab from "./DesTab";
import DesRegister from "../screens/DesRegister";

const Stack = createStackNavigator();

export default function DesStack({ initialRoute = "Start" }) {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={DesignerLogin} />
      <Stack.Screen name="DesRegister" component={DesRegister} />
      <Stack.Screen name="Account" component={DesTab} />
    </Stack.Navigator>
  );
}
