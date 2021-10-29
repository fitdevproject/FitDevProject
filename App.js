import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { StyleSheet } from "react-native";
import Navigation from "./navigation";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import Amplify from "aws-amplify";
import MyAmplifyTheme from "./theme/MyAmplifyTheme";
import config from "./src/aws-exports";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const signUpConfig = {
  hiddenDefaults: ["phone_number"],
  signUpFields: [
    {
      label: "Username",
      key: "username", // !!!
      required: true,
      placeholder: "Username",
      displayOrder: 1,
      type: "username",
      custom: false,
    },
    {
      label: "Password",
      key: "password",
      required: true,
      placeholder: "Password",
      displayOrder: 2,
      type: "password",
      custom: false,
    },
    {
      label: "Email",
      key: "email",
      required: true,
      placeholder: "Email",
      displayOrder: 3,
      type: "email",
      custom: false,
    },
  ],
};

const App = () => {
  return (
    <RecoilRoot>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
  },
});

export default withAuthenticator(App, { signUpConfig, theme: MyAmplifyTheme });
