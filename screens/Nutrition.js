import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ProgressBar } from "react-native-paper";
import { useNutrition } from "../hooks/useNutrition";
import { useRecoilState } from "recoil";
import { dailyCalorieGoalState } from "../atoms/NutritionState";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 3;

const Nutrition = ({ navigation }) => {
  // useEffect(() => {
  //   if (proteinGoal != undefined && calorieGoal != undefined) {
  //     setDailyCalorieGoal(calorieGoal);
  //     setDailyProteinGoal(proteinGoal);
  //     setCaloriesRemaining(dailyCalorieGoal - todaysCalories);
  //     setProteinRemaining(dailyProteinGoal - todaysProtein);
  //     calorieProgress();
  //     proteinProgress();
  //   }
  // });
  const nutritionHook = useNutrition();

  const calorieProgress = () =>
    setCalorieProgressBar(dailyCalorieGoal - caloriesRemaining) /
    dailyCalorieGoal;
  const proteinProgress = () =>
    setProteinProgressBar(dailyProteinGoal - proteinRemaining) /
    dailyProteinGoal;

  return (
    <View style={styles.cardWrapper}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Calorie / Protein Calculator</Text>
            <Button
              raised={true}
              title="Calculate"
              onPress={() => navigation.navigate("Goal")}
              containerStyle={styles.calculateBtnContainer}
              buttonStyle={styles.calculateBtn}
            ></Button>
          </View>
        </Card.Title>
        <Card.Divider color={"black"} />
        <View style={styles.weeklyCalorieView}>
          <Text>
            Total Calories Left For The Week: {nutritionHook.weeklyCalories}
          </Text>
        </View>
        <View style={styles.calculatorWrapper}>
          <View>
            <View style={styles.calorieView}>
              <Ionicons name={"flame"} size={20} color={"black"} />
              <Text style={{ marginLeft: 5 }}>Daily Calorie goal</Text>
            </View>
            <Text style={{ marginBottom: 5 }}>
              {nutritionHook.dailyCalorieGoal}
            </Text>
            <ProgressBar
              progress={nutritionHook.calorieProgressBar}
              color={"black"}
              style={styles.progressBar}
            />
            <Text style={{ color: "rgba(0, 0, 0, .5)" }}>
              {nutritionHook.caloriesRemaining} remaining
            </Text>
            <Button
              raised={true}
              icon={<Icon name="add" size={20} color="white" />}
              containerStyle={styles.addBtnContainer}
              buttonStyle={styles.addBtn}
            ></Button>
          </View>
          <View>
            <View style={styles.proteinView}>
              <MaterialCommunityIcons
                name={"food-drumstick"}
                size={20}
                color={"black"}
              />
              <Text style={{ marginLeft: 5 }}>Daily Protein Goal</Text>
            </View>
            <Text style={{ marginBottom: 5 }}>
              {nutritionHook.dailyProteinGoal}g
            </Text>
            <ProgressBar
              progress={nutritionHook.proteinProgressBar}
              color={"black"}
              style={styles.progressBar}
            />
            <Text style={{ color: "rgba(0, 0, 0, .5)" }}>
              {nutritionHook.proteinRemaining}g remaining
            </Text>
            <Button
              raised={true}
              icon={<Icon name="add" size={20} color="white" />}
              containerStyle={styles.addBtnContainer}
              buttonStyle={styles.addBtn}
            ></Button>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: width,
    padding: 5,
  },
  cardContainer: {
    minHeight: height,
    borderRadius: 5,
    elevation: 3,
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontSize: 16,
  },
  cardTitle: {},
  calculatorWrapper: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
  },
  calorieView: {
    flexDirection: "row",
    marginBottom: 10,
  },
  proteinView: {
    flexDirection: "row",
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    width: 140,
    borderRadius: 5,
    marginBottom: 5,
  },
  addBtnContainer: {
    marginTop: 10,
    width: 35,
    borderRadius: 25,
  },
  addBtn: {
    height: 35,
    backgroundColor: "#008800",
  },
  calculateBtnContainer: {
    width: 100,
    borderRadius: 25,
    marginLeft: 20,
  },
  calculateBtn: {
    height: 35,
    backgroundColor: "#008800",
  },
  weeklyCalorieView: {
    marginBottom: 10,
    alignItems: "center",
  },
});

export default Nutrition;
