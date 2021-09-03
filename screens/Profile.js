import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import Auth from "@aws-amplify/auth";

const Profile = () => {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <View>
      <Button
        title="Log Out"
        raised={true}
        buttonStyle={styles.nextBtn}
        containerStyle={styles.nextBtnContainer}
        onPress={signOut}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  activityItem: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#FFF",
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  activityItemSelected: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "rgba(0,128,0, 0.7)",
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  activityInfo: {
    width: "80%",
    marginLeft: 20,
  },
  activityName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  activityDescription: {
    fontSize: 14,
  },
  nextBtnContainer: {
    marginTop: 10,
    borderRadius: 5,
  },
  nextBtn: {
    backgroundColor: "green",
  },
});

export default Profile;
