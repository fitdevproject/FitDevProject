import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Home"} component={Home} />
      <Tab.Screen name={"Nutrition"} component={Home} />
      <Tab.Screen name={"Workout"} component={Home} />
      <Tab.Screen name={"Learn"} component={Home} />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
