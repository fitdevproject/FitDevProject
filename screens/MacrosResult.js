import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 4;

const MacrosResult = ({ route, navigation }) => {
  const { goal, activity, gender, goalWeight, currentWeight } = route.params;
  const [proteinGoal, setProteinGoal] = useState();
  const [calorieGoal, setCalorieGoal] = useState();

  const calculateCalorieGoal = () => {
    if (goal.name === "Lose Fat") {
      if (activity.name === "Sedentary") {
        setCalorieGoal(goalWeight * 10);
      } else {
        setCalorieGoal(goalWeight * 12);
      }
    }
    if (goal.name === "Maintain") {
      if (activity.name === "Sedentary") {
        setCalorieGoal(currentWeight * 13);
      } else {
        setCalorieGoal(currentWeight * 14);
      }
    }
    if (goal.name === "Build Muscle") {
      if (activity.name === "Sedentary") {
        setCalorieGoal(currentWeight * 15);
      } else {
        setCalorieGoal(currentWeight * 16);
      }
    }
  };

  const calculateProteinGoal = () => {
    if (gender.sex === "Female") {
      setProteinGoal(goalWeight * 0.8);
    } else {
      setProteinGoal(goalWeight);
    }
  };
  useEffect(() => {
    calculateCalorieGoal();
    calculateProteinGoal();
  });

  return (
    <View style={styles.cardWrapper}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Calorie / Protein Goal</Text>
          </View>
        </Card.Title>
        <Card.Divider color={"black"} />
        <View style={styles.calculatorWrapper}>
          <View>
            <View style={styles.calorieView}>
              <Ionicons name={"flame"} size={20} color={"black"} />
              <Text style={{ marginLeft: 5 }}>Daily Calorie goal</Text>
            </View>
            <Text style={{ marginBottom: 5 }}>{calorieGoal}</Text>
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
            <Text style={{ marginBottom: 5 }}>{proteinGoal}g</Text>
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
    height: height,
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
});

export default MacrosResult;
