import React, { useState, useRef } from "react";
import { StyleSheet, TextInput, View, Modal } from "react-native";
import { Icon, Button } from "react-native-elements";
import { Formik } from "formik";

const AddTask = ({ handleAddTask }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = useRef();

  return (
    <View>
      <Button
        raised={true}
        title=" Add Task"
        icon={<Icon name="add" size={22} color="white" />}
        containerStyle={styles.addTaskBtnContainer}
        buttonStyle={styles.addTaskBtn}
        onPress={() => setModalVisible(!modalVisible)}
      ></Button>
      <Modal
        style={styles.modalBackground}
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
            initialValues={{ text: "" }}
            onSubmit={(values) => {
              handleAddTask(values);
              setModalVisible(!modalVisible);
            }}
          >
            {(formikProps) => (
              <View style={styles.formikViewWrapper}>
                <TextInput
                  ref={inputRef}
                  style={styles.input}
                  placeholder="Enter Task"
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
                    title=" Add Task"
                    buttonStyle={styles.addTaskModalBtn}
                    containerStyle={styles.addTaskModalBtnContainer}
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
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: "red",
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
  addTaskBtnContainer: {
    marginTop: 10,
    width: 150,
    borderRadius: 25,
  },
  addTaskBtn: {
    height: 50,
    backgroundColor: "green",
  },
  addTaskModalBtnContainer: {
    marginTop: 10,
    width: 130,
    borderRadius: 25,
  },
  addTaskModalBtn: {
    height: 50,
    backgroundColor: "green",
  },
  cancelModalBtn: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    borderWidth: 0.75,
    borderColor: "rgba(0,0,0,0.5)",
  },
  cancelModalBtnTitle: {
    color: "rgba(0,0,0,0.5)",
  },
  cancelModalBtnContainer: {
    marginTop: 10,
    width: 130,
  },
});

export default AddTask;
