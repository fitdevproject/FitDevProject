import "react-native-gesture-handler";
import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ProgressBar } from "react-native-paper";
import { useNutrition } from "../hooks/useNutrition";
import { numberWithCommas } from "../utility/NumberUtility";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 3;

const Nutrition = ({ navigation }) => {
  const nutritionHook = useNutrition();
  const [calorieModalVisible, setCalorieModalVisible] = useState(false);
  const [proteinModalVisible, setProteinModalVisible] = useState(false);
  const [protein, setProtein] = useState("");
  const [calories, setCalories] = useState("");
  const inputRef = useRef();

  return (
    <>
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
              <Text style={{ marginBottom: 5 }}>
                {numberWithCommas(nutritionHook.dailyCalorieGoal)}
              </Text>
              <ProgressBar
                progress={
                  nutritionHook.calorieProgressBar
                    ? nutritionHook.calorieProgressBar
                    : 0
                }
                color={"black"}
                style={styles.progressBar}
              />
              <Text style={{ color: "rgba(0, 0, 0, .5)" }}>
                {numberWithCommas(nutritionHook.caloriesRemaining)} remaining
              </Text>
              <Button
                raised={true}
                icon={<Icon name="add" size={20} color="white" />}
                containerStyle={styles.addBtnContainer}
                buttonStyle={styles.addBtn}
                onPress={() => {
                  setCalorieModalVisible(!calorieModalVisible);
                }}
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
                progress={
                  nutritionHook.proteinProgressBar
                    ? nutritionHook.proteinProgressBar
                    : 0
                }
                color={"black"}
                style={styles.progressBar}
              />
              <Text style={{ color: "rgba(0, 0, 0, .5)" }}>
                {nutritionHook.proteinRemaining}g remaining
              </Text>
              <Button
                onPress={() => {
                  setProteinModalVisible(!proteinModalVisible);
                }}
                raised={true}
                icon={<Icon name="add" size={20} color="white" />}
                containerStyle={styles.addBtnContainer}
                buttonStyle={styles.addBtn}
              ></Button>
            </View>
          </View>
          <View style={styles.weeklyCalorieView}>
            <Text>
              Total Calories Left For The Week:{" "}
              {numberWithCommas(nutritionHook.weeklyCaloriesRemaining)}
            </Text>
          </View>
        </Card>
      </View>
      <View>
        <Modal
          onShow={() => {
            setTimeout(() => {
              inputRef.current.focus();
            }, 1);
          }}
          animationType="slide"
          transparent={false}
          visible={proteinModalVisible}
          onRequestClose={() => {
            setProteinModalVisible(!proteinModalVisible);
          }}
        >
          <View style={styles.modalWrapper}>
            <View style={styles.formikViewWrapper}>
              <TextInput
                placeholder="Protein"
                keyboardType="numeric"
                ref={inputRef}
                style={styles.input}
                onChangeText={(protein) => setProtein(protein)}
                value={protein}
              />
              <View style={styles.modalBtnWrapper}>
                <Button
                  title=" Cancel"
                  titleStyle={styles.cancelModalBtnTitle}
                  buttonStyle={styles.cancelModalBtn}
                  containerStyle={styles.cancelModalBtnContainer}
                  onPress={() => {
                    setProtein("");
                    setProteinModalVisible(!proteinModalVisible);
                  }}
                  icon={<Icon name="close" size={22} color="rgba(0,0,0,0.5)" />}
                ></Button>
                <Button
                  raised={true}
                  title=" Update"
                  buttonStyle={styles.updateModalBtn}
                  containerStyle={styles.updateModalBtnContainer}
                  onPress={() => {
                    nutritionHook.updateProteinInfo(parseInt(protein));
                    setProtein("");
                    setProteinModalVisible(!proteinModalVisible);
                  }}
                  icon={<Icon name="add" size={24} color="white" />}
                ></Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Modal
          onShow={() => {
            setTimeout(() => {
              inputRef.current.focus();
            }, 1);
          }}
          animationType="slide"
          transparent={false}
          visible={calorieModalVisible}
          onRequestClose={() => {
            setCalorieModalVisible(!calorieModalVisible);
          }}
        >
          <View style={styles.modalWrapper}>
            <View style={styles.formikViewWrapper}>
              <TextInput
                placeholder="Calories"
                keyboardType="numeric"
                ref={inputRef}
                style={styles.input}
                onChangeText={(calories) => setCalories(calories)}
                value={calories}
              />
              <View style={styles.modalBtnWrapper}>
                <Button
                  title=" Cancel"
                  titleStyle={styles.cancelModalBtnTitle}
                  buttonStyle={styles.cancelModalBtn}
                  containerStyle={styles.cancelModalBtnContainer}
                  onPress={() => {
                    setCalories("");
                    setCalorieModalVisible(!calorieModalVisible);
                  }}
                  icon={<Icon name="close" size={22} color="rgba(0,0,0,0.5)" />}
                ></Button>
                <Button
                  raised={true}
                  title=" Update"
                  buttonStyle={styles.updateModalBtn}
                  containerStyle={styles.updateModalBtnContainer}
                  onPress={() => {
                    nutritionHook.updateCalorieInfo(parseInt(calories));
                    setCalories("");
                    setCalorieModalVisible(!calorieModalVisible);
                  }}
                  icon={<Icon name="add" size={24} color="white" />}
                ></Button>
              </View>
            </View>
          </View>
        </Modal>
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
    marginTop: 12,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    width: "80%",
    borderColor: "#545454",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    alignSelf: "center",
  },
  modalWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  modalBtnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  updateModalBtn: {
    height: 50,
    backgroundColor: "green",
  },
  updateModalBtnContainer: {
    marginTop: 10,
    width: 130,
    borderRadius: 25,
  },
  cancelModalBtn: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    borderWidth: 0.75,
    borderColor: "rgba(0,0,0,0.5)",
  },
  cancelModalBtnContainer: {
    marginTop: 10,
    width: 130,
  },
  cancelModalBtnTitle: {
    color: "rgba(0,0,0,0.5)",
  },
});

export default Nutrition;
