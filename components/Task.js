import React, { useState, useRef } from "react";
import { Icon, Button } from "react-native-elements";
import { View, Text, StyleSheet, Alert, Modal, TextInput } from "react-native";
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
  const inputRef = useRef();
  const showDeleteAlert = () =>
    Alert.alert("Delete Task", "Are you sure?", [
      {
        text: "No",
        style: "cancel",
      },
      { text: "Yes", onPress: () => onRemove(task.id) },
    ]);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <CheckBox
          checkedColor="green"
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
          onShow={() => {
            setTimeout(() => {
              inputRef.current.focus();
            }, 1);
          }}
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
                editTask(values, task.id);
                setModalVisible(!modalVisible);
              }}
            >
              {(formikProps) => (
                <View style={styles.formikViewWrapper}>
                  <TextInput
                    keyboardType="default"
                    ref={inputRef}
                    style={styles.input}
                    onChangeText={formikProps.handleChange("text")}
                    value={formikProps.values.text}
                  />
                  <View style={styles.modalBtnWrapper}>
                    <Button
                      title=" Cancel"
                      titleStyle={styles.cancelModalBtnTitle}
                      buttonStyle={styles.cancelModalBtn}
                      containerStyle={styles.cancelModalBtnContainer}
                      onPress={() => setModalVisible(!modalVisible)}
                      icon={
                        <Icon name="close" size={22} color="rgba(0,0,0,0.5)" />
                      }
                    ></Button>
                    <Button
                      raised={true}
                      title=" Update"
                      buttonStyle={styles.updateTaskModalBtn}
                      containerStyle={styles.updateTaskModalBtnContainer}
                      onPress={formikProps.handleSubmit}
                      icon={<Icon name="add" size={24} color="white" />}
                    ></Button>
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
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "rgba(0,0,0,0.3)",
    width: "75%",
    fontSize: 16,
    flexWrap: "wrap",
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
    flexWrap: "wrap",
    fontSize: 16,
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
  updateTaskModalBtn: {
    height: 50,
    backgroundColor: "green",
  },
  updateTaskModalBtnContainer: {
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

export default Task;
