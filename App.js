import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Navigation from "./navigation";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const GREEN = "#008800";
const DISABLED_GREEN = "#00880080";

const ButtonColor = Object.assign({}, AmplifyTheme.button, {
  backgroundColor: GREEN,
});
const DisabledButtonColor = Object.assign({}, AmplifyTheme.buttonDisabled, {
  backgroundColor: DISABLED_GREEN,
});
const SectionFooterLinkColor = Object.assign(
  {},
  AmplifyTheme.sectionFooterLink,
  {
    color: GREEN,
  }
);
const SectionFooterLinkColorDisabled = Object.assign(
  {},
  AmplifyTheme.sectionFooterLinkDisabled,
  {
    color: DISABLED_GREEN,
  }
);
const Container = Object.assign({}, AmplifyTheme.container, {
  justifyContent: "center",
});
const MyTheme = Object.assign({}, AmplifyTheme, {
  button: ButtonColor,
  buttonDisabled: DisabledButtonColor,
  sectionFooterLink: SectionFooterLinkColor,
  SectionFooterLinkColorDisabled: SectionFooterLinkColorDisabled,
  container: Container,
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
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
  },
});

export default withAuthenticator(App, { signUpConfig, theme: MyTheme });
