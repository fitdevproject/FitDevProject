import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeBottomTabNavigator from "./homeBottomTabNavigator";
import Goal from "../screens/Goal";
import GoalInformation from "../screens/GoalInformation";
import ActivityLevel from "../screens/ActivityLevel";
import Nutrition from "../screens/Nutrition";

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="Home"
          component={HomeBottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Nutrition" component={Nutrition} />
        <Stack.Screen
          name="Goal"
          component={Goal}
          options={{
            headerTitle: "Step 1 of 3",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Activity Level"
          component={ActivityLevel}
          options={{
            headerTitle: "Step 2 of 3",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Goal Information"
          component={GoalInformation}
          options={{
            headerTitle: "Step 3 of 3",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
