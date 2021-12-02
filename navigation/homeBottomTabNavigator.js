import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Nutrition from "../screens/Nutrition";
import Profile from "../screens/Profile";
import Weight from "../screens/Weight";

const Tab = createBottomTabNavigator();
const ICON_SIZE = 25;

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "rgba(0, 0, 0, 0.3)",
        tabBarActiveTintColor: "#008800",
        headerTitleAlign: "center",
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name={"Critical Tasks"}
        component={Home}
        options={{
          title: "Critical Tasks",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={"assignment"} size={ICON_SIZE} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Nutrition"}
        component={Nutrition}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"nutrition"} size={ICON_SIZE} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Weight"}
        component={Weight}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={"scale-bathroom"}
              size={ICON_SIZE}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"person"} size={ICON_SIZE} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen name={"Workout"} component={Home} />
      <Tab.Screen name={"Learn"} component={Home} /> */}
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
