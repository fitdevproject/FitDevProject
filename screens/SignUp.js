import React, { useState, useRef } from "react";
import { StyleSheet, TextInput, View, Modal, Text } from "react-native";
import { Icon, Button } from "react-native-elements";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    // Main view with title
    <View style={styles.mainView}>
      {/* Sign Up Form view */}
      <View style={styles.formWrapper}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            handleSignUp(values);
          }}
        >
          {(formikProps) => (
            <View style={styles.formikViewWrapper}>
              <Text style={styles.formTitle}>Sign Up</Text>
              <TextInput
                style={styles.input}
                placeholder="* First Name"
                onChangeText={formikProps.handleChange("firstName")}
                value={formikProps.values.firstName}
              />
              <TextInput
                style={styles.input}
                placeholder="* Last Name"
                onChangeText={formikProps.handleChange("lastName")}
                value={formikProps.values.lastName}
              />
              <TextInput
                style={styles.input}
                placeholder="* Username"
                onChangeText={formikProps.handleChange("username")}
                value={formikProps.values.username}
              />
              <TextInput
                style={styles.input}
                placeholder="* Password"
                onChangeText={formikProps.handleChange("password")}
                value={formikProps.values.password}
              />
              <TextInput
                style={styles.input}
                placeholder="* Confirm Password"
                onChangeText={formikProps.handleChange("confirmPassword")}
                value={formikProps.values.confirmPassword}
              />
              <Button
                onPress={() => navigation.navigate("Home")}
                raised={true}
                title="Sign Up"
                buttonStyle={styles.signUpBtn}
                containerStyle={styles.signUpBtnContainer}
              ></Button>
              <View style={styles.signInTextView}>
                <Text style={styles.signInText}>Already have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Sign In")}
                >
                  <Text style={styles.signInTextNavigation}> Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
      {/* Other sign in options */}
      <View></View>
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
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 10,
  },
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ededed",
  },
  formWrapper: {
    width: "80%",
    height: "70%",
    borderRadius: 5,
    borderWidth: 1,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: "white",
  },
  formTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
  },
  signInTextView: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  signInText: {
    color: "black",
  },
  signInTextNavigation: {
    color: "#008800",
  },
  signUpBtnContainer: {
    marginTop: 30,
    marginBottom: 30,
    width: "80%",
    alignSelf: "center",
  },
  signUpBtn: {
    backgroundColor: "#008800",
  },
});

export default SignUp;
