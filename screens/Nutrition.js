import "react-native-gesture-handler";
import React, { useState } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ProgressBar } from "react-native-paper";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 3;

const Nutrition = ({ navigation }) => {
  const [calorieGoal, setCalorieGoal] = useState(2000);
  const [caloriesRemaining, setCaloriesRemaining] = useState(1800);
  const [calorieProgressBar, setCalorieProgressBar] = useState(
    (calorieGoal - caloriesRemaining) / calorieGoal
  );
  const [proteinGoal, setProteinGoal] = useState(190);
  const [proteinRemaining, setProteinRemaining] = useState(20);
  const [proteinProgresBar, setProteinProgressBar] = useState(
    (proteinGoal - proteinRemaining) / proteinGoal
  );

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
        <View style={styles.calculatorWrapper}>
          <View>
            <View style={styles.calorieView}>
              <Ionicons name={"flame"} size={20} color={"black"} />
              <Text style={{ marginLeft: 5 }}>Daily Calorie goal</Text>
            </View>
            <Text style={{ marginBottom: 5 }}>{calorieGoal}</Text>
            <ProgressBar
              progress={calorieProgressBar}
              color={"black"}
              style={styles.progressBar}
            />
            <Text style={{ color: "rgba(0, 0, 0, .5)" }}>
              {caloriesRemaining} remaining
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
            <Text style={{ marginBottom: 5 }}>{proteinGoal}g</Text>
            <ProgressBar
              progress={proteinProgresBar}
              color={"black"}
              style={styles.progressBar}
            />
            <Text style={{ color: "rgba(0, 0, 0, .5)" }}>
              {proteinRemaining}g remaining
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
});

export default Nutrition;
