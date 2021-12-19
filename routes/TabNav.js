import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Accepted from "../screens/Accepted";

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        // shifting: true,
        // tabBarShowLabel: false,
        // tabBarHideOnKeyboard: true,
        // tabBarStyle: { position: "absolute" },
        // headerShown: false,
        // tabBarLabelStyle:{
        //   fontSize: 3
        // }
        headerLeft: () => (
          <Entypo name="menu" size={28} style={{ marginLeft: "5%" }} />
        ),
        tabBarActiveTintColor: "black",
        // tabBarInactiveTintColor: "black",
        headerStyle: {
          // backgroundColor: '#f4511e',
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Accepted"
        component={Accepted}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="verified-user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
