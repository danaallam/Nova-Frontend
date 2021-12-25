import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import DesignerLogin from "../screens/DesignerLogin";
import DesStack from "./DesStack";

const Drawer = createDrawerNavigator();

export default DesMenu = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Jobs"
        screenOptions={{
          headerShown: false,
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 10 },
        }}
      >
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome
                name="user-circle"
                size={24}
                color={focused ? "#e91e63" : "black"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Jobs"
          component={DesStack}
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                name="business-center"
                size={24}
                color={focused ? "#e91e63" : "black"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="settings"
                size={24}
                color={focused ? "#e91e63" : "black"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={DesignerLogin}
          options={{
            drawerIcon: ({ focused }) => (
              <AntDesign
                name="logout"
                size={24}
                color={focused ? "#e91e63" : "black"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
