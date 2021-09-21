import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const goals = [
  {
    id: 1,
    name: "Lose Fat",
    description: "Eat and train to lose body fat",
  },
  {
    id: 2,
    name: "Build Muscle",
    description: "Eat and train to build muscle",
  },
  {
    id: 3,
    name: "Maintain",
    description: "Eat and train to maintain your current physique",
  },
];

const Goal = ({ navigation }) => {
  const [goalSelected, setGoalSelected] = useState(1);
  const [goal, setGoal] = useState(goals[0]);

  const handleGoalPress = (id) => {
    setGoalSelected(id);
  };

  return (
    <View style={{ marginTop: 30, padding: 15 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 30 }}>
        My goal is to...
      </Text>
      <FlatList
        data={goals}
        extraData={goalSelected}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={
                goalSelected === item.id
                  ? styles.goalItemSelected
                  : styles.goalItem
              }
              onPress={() => {
                handleGoalPress(item.id);
                setGoal(item);
              }}
            >
              <View style={styles.iconView}>
                {/* <Icon
                  name={
                    item.name === "Lose Fat"
                      ? "scale"
                      : item.name === "Build Muscle"
                      ? "flex"
                      : "maintain"
                  }
                  size={100}
                  color={"black"}
                /> */}
                <MaterialCommunityIcons
                  name={
                    item.name === "Lose Fat"
                      ? "scale-bathroom"
                      : item.name === "Build Muscle"
                      ? "arm-flex"
                      : "heart-pulse"
                  }
                  size={40}
                />
              </View>
              <View style={styles.goalInfo}>
                <Text style={styles.goalName}>{item.name}</Text>
                <Text style={styles.goalDescription}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Next"
        raised={true}
        buttonStyle={styles.nextBtn}
        containerStyle={styles.nextBtnContainer}
        onPress={() =>
          navigation.navigate("Activity Level", {
            goal: goal,
          })
        }
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#FFF",
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  goalItemSelected: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "rgba(0,128,0, 0.7)",
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  goalInfo: {
    width: "80%",
    marginLeft: 20,
  },
  goalName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  goalDescription: {
    fontSize: 14,
  },
  nextBtnContainer: {
    marginTop: 10,
    borderRadius: 5,
  },
  nextBtn: {
    backgroundColor: "#008800",
  },
});

export default Goal;
