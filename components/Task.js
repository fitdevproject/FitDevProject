import React, { useState } from "react";
import { Icon } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
} from "react-native";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { Formik } from "formik";

const Task = ({
  task,
  editTask,
  onToggleComplete,
  onRemove,
  isEditDisabled,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
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
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      )}
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalWrapper}>
            <Formik
              initialValues={{ text: task.text }}
              onSubmit={(values) => {
                editTask(task.id, values);
              }}
            >
              {(formikProps) => (
                <View style={styles.formikViewWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Update Task"
                    autoFocus={true}
                    onChangeText={formikProps.handleChange("text")}
                    value={formikProps.values.text}
                  />
                  <View style={styles.modalBtnWrapper}>
                    <TouchableOpacity
                      style={styles.cancelModalBtn}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text styles={styles.addTaskBtnText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.addTaskModalBtn}
                      onPress={formikProps.handleSubmit}
                    >
                      <Text styles={styles.addTaskBtnText}>Update</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </Modal>
      </View>
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
  input: {
    borderWidth: 1,
    width: "80%",
    borderColor: "#545454",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    alignSelf: "center",
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
  addTaskModalBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 100,
    height: 40,
    borderRadius: 50,
    borderColor: "#545454",
    borderWidth: 1,
  },
  cancelModalBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 100,
    height: 40,
    borderRadius: 50,
    borderColor: "#545454",
    borderWidth: 1,
  },
});

export default Task;
