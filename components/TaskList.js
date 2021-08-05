import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Alert, Modal, StyleSheet, Text, View, Button } from "react-native";
import Task from "./Task";

const TaskList = ({
  tasks,
  onEdit,
  onToggleComplete,
  onRemove,
  disableIcon,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's Critical Tasks</Text>
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
            />
          ))}
        </View>
      )}

      {tasks.length < 5 && (
        <View style={styles.btnWrapper}>
          <Text>You can add up to {5 - tasks.length} more task(s).</Text>
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
  sectionTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
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
