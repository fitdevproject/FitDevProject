import color from "color";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Slider, Button } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const genders = [
  {
    id: 1,
    sex: "Male",
  },
  {
    id: 2,
    sex: "Female",
  },
];

const GoalInformation = () => {
  const [goalWeight, setGoalWeight] = useState(0);
  const [currentWeight, setCurrentWeight] = useState(0);
  const [gender, setGender] = useState(null);
  const [genderSelected, setGenderSelected] = useState(null);

  const handleGenderPress = (id) => {
    setGenderSelected(id);
  };
  return (
    <View style={{ marginTop: 30, padding: 15 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 30 }}>
        Tell me about yourself...
      </Text>
      <Text style={styles.genderText}>Gender</Text>
      <FlatList
        contentContainerStyle={{ marginBottom: 50 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={genders}
        extraData={genderSelected}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={
                genderSelected === item.id
                  ? styles.genderItemSelected
                  : styles.genderItem
              }
              onPress={() => {
                handleGenderPress(item.id);
                setGender(item);
              }}
            >
              <MaterialCommunityIcons
                name={item.sex === "Male" ? "human-male" : "human-female"}
                size={40}
              />
              <Text style={styles.genderName}>{item.sex}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ marginBottom: 30 }}>
        <View style={styles.weightTextView}>
          <Text style={styles.weightText}>Current Weight</Text>
          <Text style={styles.weightText}>{currentWeight} lbs</Text>
        </View>
        <View>
          <Slider
            value={currentWeight}
            maximumValue={400}
            value={200}
            thumbTintColor="green"
            thumbStyle={{ height: 30, width: 30 }}
            trackStyle={{ height: 10, borderRadius: 5 }}
            step={1}
            minimumValue={100}
            onValueChange={(value) => setCurrentWeight(value)}
          />
        </View>
      </View>
      <View>
        <View style={styles.weightTextView}>
          <Text style={styles.weightText}>Goal Weight</Text>
          <Text style={styles.weightText}>{goalWeight} lbs</Text>
        </View>
        <View>
          <Slider
            value={goalWeight}
            maximumValue={400}
            value={200}
            thumbTintColor="green"
            thumbStyle={{ height: 30, width: 30 }}
            trackStyle={{ height: 10, borderRadius: 5 }}
            step={1}
            minimumValue={100}
            onValueChange={(value) => setGoalWeight(value)}
          />
        </View>
      </View>
      <Button
        title="Calculate"
        raised={true}
        buttonStyle={styles.calculateBtn}
        containerStyle={styles.calculateBtnContainer}
        onPress={() => console.log("Calculate me")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  weightTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weightText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  genderText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  genderItem: {
    width: 180,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
  genderItemSelected: {
    width: 180,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
  itemInner: {},
  genderName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  calculateBtnContainer: {
    marginTop: 20,
    borderRadius: 5,
  },
  calculateBtn: {
    backgroundColor: "#008800",
  },
});

export default GoalInformation;
