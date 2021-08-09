import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Formik } from "formik";

const AddTask = ({ handleAddTask }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.addTaskBtn}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text styles={styles.addTaskBtnText}>Add Task</Text>
      </TouchableOpacity>
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
            initialValues={{ text: "" }}
            onSubmit={(values) => {
              handleAddTask(values);
            }}
          >
            {(formikProps) => (
              <View style={styles.formikViewWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Task"
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
                    <Text styles={styles.addTaskBtnText}>Add Task</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default AddTask;
