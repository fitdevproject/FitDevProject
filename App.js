import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
});
