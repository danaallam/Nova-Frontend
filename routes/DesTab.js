import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";
import DesHome from "../screens/DesHome";
import CreateJob from "../screens/CreateJob";
import Requests from "../screens/Requests";

export default function DesTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => (
          <Entypo name="menu" size={28} style={{ marginLeft: "5%" }} />
        ),
        tabBarActiveTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={DesHome}
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
        name="Create Job"
        component={CreateJob}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Requests}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
