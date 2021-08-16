import React from "react";
import { format } from "date-fns";
import { Icon } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";

const TaskNavigator = ({
  onLeftArrowClick,
  currentIndex,
  onRightArrowClick,
  currentDay,
}) => {
  return (
    <View style={styles.dateView}>
      <Icon
        style={styles.closeIcon}
        name="west"
        size={40}
        onPress={onLeftArrowClick}
        disabled={currentIndex === 0}
        disabledStyle={styles.disabled}
      />

      <Text style={styles.dateInfo}>
        {format(currentDay.date, "cccc LLLL d, yyyy")}
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
    backgroundColor: "#F8F8F8",
  },
  dateInfo: {
    textAlign: "center",
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default TaskNavigator;
