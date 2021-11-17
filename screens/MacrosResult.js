import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNutrition } from "../hooks/useNutrition";
import { numberWithCommas } from "../utility/NumberUtility";
import { ScrollView } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 4;
const scrollViewHeight = Dimensions.get("window").height / 3;

const MacrosResult = ({ route, navigation }) => {
  const nutritionHook = useNutrition();
  const { goal, activity, gender, goalWeight, currentWeight } = route.params;

  useEffect(() => {
    nutritionHook.calculateCalorieGoal(
      goal.name,
      activity.name,
      goalWeight,
      currentWeight
    );
    nutritionHook.calculateProteinGoal(gender.sex, goalWeight);
  });

  return (
    <>
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
              <Text style={{ marginBottom: 5 }}>
                {numberWithCommas(nutritionHook.tempDailyCalorieGoal)}
              </Text>
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
                {nutritionHook.tempDailyProteinGoal}g
              </Text>
            </View>
          </View>
          <View style={styles.weeklyCalorieView}>
            <Text>
              Total Calories Per Week:{" "}
              {numberWithCommas(nutritionHook.tempWeeklyCalories)}
            </Text>
          </View>
        </Card>
      </View>
      <ScrollView
        style={styles.macroResultInformation}
        persistentScrollbar={true}
      >
        <View style={styles.calorieTarget}>
          <Text style={styles.macroInfoTitles}>Calorie Target</Text>
          <Text>
            Your daily calorie goal is the amount of calories you should aim to
            eat each day. Your total calories for the week has also been
            calculated and shown above. Knowing your weekly caloric intake is a
            very powerful tool, because it allows you to have days where you
            either consume less than or more than your calorie goal for the day
            and still be compliant to your overall calorie goal. This is very
            useful in scenarios where life happens, and you simply just want to
            enjoy yourself. No harm no foul, since you know your total calorie
            goal for the week.
          </Text>
        </View>
        <View style={styles.proteinTarget}>
          <Text style={styles.macroInfoTitles}>Protein Target</Text>
          <Text>
            Your daily protein target is the most important number to hit.
            Calories from protein should be prioritized, because they will help
            you feel more full throughout each day. Protein is also the building
            block for your muscles. It is going to be important to hit your
            protein goal each day to either hold onto or gain muscle depending
            on the goal you have chosen.
          </Text>
        </View>
        <View style={styles.fatAndCarbTarget}>
          <Text style={styles.macroInfoTitles}>Fat & Carb Target</Text>
          <Text>
            Your daily fat & carb target is up to you. As long as you are
            hitting your protein and calorie goal, the amount of carb vs fat
            doesn't matter. Some do better with higher carb, and some do better
            on lower carb. We are following more of a flexible approach to
            dieting, because I don't believe in forcing someone into a super
            restrictive lifestyle by following a diet where a macro nutrient is
            entirely cut out for the sake of losing weight.
          </Text>
          <Text style={styles.warning}>
            You should always consult with a health professional before
            following any diet.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.actionButtons}>
        <Button
          title="Use This Result"
          raised={true}
          buttonStyle={styles.useResultBtn}
          containerStyle={styles.useResultBtnContainer}
          onPress={() => {
            nutritionHook.setResults();
            navigation.popToTop();
          }}
        ></Button>
        <Button
          title="Recalculate"
          raised={true}
          buttonStyle={styles.recalculateBtn}
          containerStyle={styles.recalculateBtnContainer}
          onPress={() => {
            nutritionHook.clearTempResults;
            navigation.navigate("Goal");
          }}
        ></Button>
      </View>
    </>
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
  weeklyCalorieView: {
    marginTop: 12,
    alignItems: "center",
  },
  actionButtons: {
    marginBottom: 10,
  },
  useResultBtnContainer: {
    margin: 5,
    borderRadius: 5,
  },
  useResultBtn: {
    backgroundColor: "#008800",
  },
  recalculateBtnContainer: {
    margin: 5,
    borderRadius: 5,
  },
  recalculateBtn: {
    backgroundColor: "#008800",
  },
  macroResultInformation: {
    height: scrollViewHeight,
  },
  macroInfoTitles: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  calorieTarget: {
    padding: 15,
  },
  proteinTarget: {
    padding: 15,
  },
  fatAndCarbTarget: {
    padding: 15,
  },
  warning: {
    marginTop: 15,
  },
});

export default MacrosResult;
