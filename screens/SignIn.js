import React, { useState, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Modal,
  Text,
  Dimensions,
} from "react-native";
import { Icon, Button } from "react-native-elements";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const SignIn = ({ navigation }) => {
  return (
    // Main view with title
    <View style={styles.mainView}>
      {/* Sign in Form view */}
      <View style={styles.formWrapper}>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => {
            handleSignIn(values);
          }}
        >
          {(formikProps) => (
            <View style={styles.formikViewWrapper}>
              <Text style={styles.formTitle}>Sign In</Text>
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
              <Button
                onPress={() => navigation.navigate("Home")}
                raised={true}
                title="Sign In"
                buttonStyle={styles.signInBtn}
                containerStyle={styles.signInBtnContainer}
              ></Button>
              <View style={styles.signUpTextView}>
                <Text style={styles.signUpText}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Sign Up")}
                >
                  <Text style={styles.signUpTextNavigation}> Sign Up</Text>
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
  topBg: {
    backgroundColor: "red",
    height: "30%",
    width: "100%",
  },
  bottomBg: {
    backgroundColor: "blue",
    height: "30%",
    width: "100%",
  },
  formWrapper: {
    backgroundColor: "white",
    width: "80%",
    height: "50%",
    borderRadius: 5,
    borderWidth: 1,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  formTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
  },
  signUpTextView: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    color: "black",
  },
  signUpTextNavigation: {
    color: "#008800",
  },
  signInBtnContainer: {
    marginTop: 30,
    marginBottom: 30,
    width: "80%",
    alignSelf: "center",
  },
  signInBtn: {
    backgroundColor: "#008800",
  },
});

export default SignIn;
