import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";

const Task = ({ task, onEdit, onToggleComplete, onRemove, isEditDisabled }) => {
  const showDeleteAlert = () =>
    Alert.alert("Delete Task", "Are you sure?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => onRemove(task.id) },
    ]);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <CheckBox
          checkedColor="#7ed957"
          checked={task.complete}
          onPress={() => onToggleComplete(task.id)}
          style={styles.square}
        ></CheckBox>
        {task.complete ? (
          <Text style={styles.completedTask}>{task.text}</Text>
        ) : (
          <Text style={styles.itemText}>{task.text}</Text>
        )}
      </View>
      {!isEditDisabled && (
        <View style={styles.itemRight}>
          <Icon
            color="red"
            style={styles.closeIcon}
            name="close"
            size={25}
            onPress={showDeleteAlert}
          />
          <Icon
            iconStyle={styles.editIcon}
            size={25}
            name="create"
            onPress={() => onEdit(task.id)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#FFF",
    padding: 10,
    borderColor: "#545454",
    borderWidth: 2,
    borderRadius: 5,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "rgba(0,0,0,0.3)",
    width: "80%",
  },
  itemLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  itemRight: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  square: {
    width: 24,
    height: 24,
    opacity: 0.4,
    marginRight: 15,
    borderRadius: 5,
  },
  itemText: {
    width: "80%",
    color: "rgba(0,0,0,1)",
  },
  editIcon: {
    marginLeft: 15,
  },
});

export default Task;
