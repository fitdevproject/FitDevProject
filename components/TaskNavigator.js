import React from "react";
import { format } from "date-fns";
import { Icon } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";

const TaskNavigator = ({ currentDay, onLeftArrowClick, onRightArrowClick }) => {
  return (
    <View style={styles.dateView}>
      <Icon
        style={styles.closeIcon}
        name="west"
        size={40}
        onPress={onLeftArrowClick}
      />

      <Text style={styles.dateInfo}>
        {currentDay.date ? format(currentDay.date, "cccc LLLL d, yyyy") : ""}
      </Text>
      <Icon
        iconStyle={styles.editIcon}
        size={40}
        name="east"
        onPress={onRightArrowClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dateView: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  disabled: {
    backgroundColor: "#f1f1f1",
  },
  dateInfo: {
    textAlign: "center",
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default TaskNavigator;
