import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";

const activities = [
  {
    id: 1,
    name: "Sedentary",
    description: "Little or no exercise",
  },
  {
    id: 2,
    name: "Lightly Active",
    description: "Light exercise 1-3 days per week",
  },
  {
    id: 3,
    name: "Moderately Active",
    description: "Moderate exercise 3-5 days per week",
  },
  {
    id: 4,
    name: "Very Active",
    description: "Hard exercise 6-7 days per week",
  },
];

const ActivityLevel = ({ navigation }) => {
  const [activitySelected, setActivitySelected] = useState(null);
  const [activity, setActivity] = useState(null);

  const handleActivityPress = (id) => {
    setActivitySelected(id);
  };

  return (
    <View style={{ marginTop: 30, padding: 15 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 30 }}>
        My current activity level is...
      </Text>
      <FlatList
        data={activities}
        extraData={activitySelected}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={
                activitySelected === item.id
                  ? styles.activityItemSelected
                  : styles.activityItem
              }
              onPress={() => {
                handleActivityPress(item.id);
                setActivity(item);
              }}
            >
              <View style={styles.iconView}>
                {/* <MaterialCommunityIcons
                  name={
                    item.name === "Lose Fat"
                      ? "scale-bathroom"
                      : item.name === "Build Muscle"
                      ? "arm-flex"
                      : "heart-pulse"
                  }
                  size={40}
                /> */}
              </View>
              <View style={styles.activityInfo}>
                <Text style={styles.activityName}>{item.name}</Text>
                <Text style={styles.activityDescription}>
                  {item.description}
                </Text>
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
        onPress={() => navigation.navigate("Goal Information")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  activityItem: {
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
  activityItemSelected: {
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
  activityInfo: {
    width: "80%",
    marginLeft: 20,
  },
  activityName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  activityDescription: {
    fontSize: 14,
  },
  nextBtnContainer: {
    marginTop: 10,
    borderRadius: 5,
  },
  nextBtn: {
    backgroundColor: "green",
  },
});

export default ActivityLevel;
