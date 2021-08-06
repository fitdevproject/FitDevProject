import React, { useState, useMemo } from "react";
import { format, addDays } from "date-fns";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { Alert, Modal, StyleSheet, Text, View, Button } from "react-native";
import Task from "./Task";

const TaskList = ({ tasks, onEdit, onToggleComplete, onRemove }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [todaysDate, setTodaysDate] = useState(new Date());

  const isEditDisabled = useMemo(() => {
    let completedTasks = tasks.filter((task) => task.complete);
    return completedTasks.length === tasks.length;
  }, [tasks]);

  const addDay = () => {
    let tempDate = new Date();
    tempDate.setHours(0, 0, 0, 0);
    if (todaysDate < tempDate) {
      setTodaysDate(addDays(todaysDate, 1));
    }
  };

  const subtractDay = () => {
    setTodaysDate(addDays(todaysDate, -1));
    console.log(todaysDate);
  };

  return (
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Critical Tasks</Text>
      <View style={styles.dateView}>
        <Icon
          style={styles.closeIcon}
          name="west"
          size={30}
          onPress={subtractDay}
        />
        <Text style={styles.dateInfo}>
          {format(todaysDate, "cccc LLLL d, yyyy")}
        </Text>
        <Icon
          iconStyle={styles.editIcon}
          size={30}
          name="east"
          onPress={addDay}
        />
      </View>
      {tasks.length > 0 && (
        <View style={styles.items}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onEdit={onEdit}
              onToggleComplete={onToggleComplete}
              onRemove={onRemove}
              tasks={tasks}
              isEditDisabled={isEditDisabled}
            />
          ))}
        </View>
      )}
      {tasks.length < 5 && (
        <View style={styles.btnWrapper}>
          <Text>
            You can add up to {5 - tasks.length} more{" "}
            {tasks.length === 4 ? "task" : "tasks"}.
          </Text>
          <TouchableOpacity
            style={styles.addTaskBtn}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text styles={styles.addTaskBtnText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalWrapper}>
          <View style={styles.modalFormContent}>
            <Text>Hello from modal</Text>
          </View>
          <View style={styles.modalBtnWrapper}>
            <TouchableOpacity style={styles.addTaskModalBtn}>
              <Text styles={styles.addTaskBtnText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelModalBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text styles={styles.addTaskBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  dateView: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  dateInfo: {
    textAlign: "center",
    fontSize: 18,
  },
  items: {
    marginTop: 30,
  },
  btnWrapper: {
    marginTop: 20,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },
  addTaskBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 150,
    height: 60,
    borderRadius: 50,
    borderColor: "#545454",
    borderWidth: 1,
  },
  noTasksView: {
    marginTop: 20,
    alignItems: "center",
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
  },
  addTaskModalBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 150,
    height: 60,
    borderRadius: 50,
    borderColor: "#545454",
    borderWidth: 1,
  },
  cancelModalBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 150,
    height: 60,
    borderRadius: 50,
    borderColor: "#545454",
    borderWidth: 1,
  },
});

export default TaskList;
