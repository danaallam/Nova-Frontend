import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "../screens/Settings";
import Login from "../screens/Login";
import Saved from "../screens/Saved";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import StackNav from "./StackNav";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default MenuNav = () => {
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
          name="Jobs"
          component={StackNav}
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
          name="Saved"
          component={Saved}
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                name="favorite"
                size={24}
                color={focused ? "#e91e63" : "black"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={Login}
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
