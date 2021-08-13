import React, { useState, useMemo } from "react";
import { format, addDays } from "date-fns";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { Alert, Modal, StyleSheet, Text, View, Button } from "react-native";
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";

const TaskList = ({
  currentDay,
  currentDayTasks,
  editTask,
  onToggleComplete,
  onRemove,
  handleAddTask,
  onRightArrowClick,
  onLeftArrowClick,
}) => {
  const [todaysDate, setTodaysDate] = useState(new Date());

  const isEditDisabled = useMemo(() => {
    let completedTasks = currentDayTasks.filter((task) => task.complete);
    return completedTasks.length === currentDayTasks.length;
  }, [currentDayTasks]);

  return (
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Critical Tasks</Text>
      <View style={styles.dateView}>
        <Icon
          style={styles.closeIcon}
          name="west"
          size={30}
          onPress={onLeftArrowClick}
        />
        <Text style={styles.dateInfo}>
          {format(currentDay.date, "cccc LLLL d, yyyy")}
        </Text>
        <Icon
          iconStyle={styles.editIcon}
          size={30}
          name="east"
          onPress={onRightArrowClick}
        />
      </View>
      {currentDayTasks.length > 0 && (
        <View style={styles.items}>
          {currentDayTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              editTask={editTask}
              onToggleComplete={onToggleComplete}
              onRemove={onRemove}
              isEditDisabled={isEditDisabled}
            />
          ))}
        </View>
      )}
      {currentDayTasks.length < 5 && (
        <View style={styles.btnWrapper}>
          <Text>
            You can add up to {5 - currentDayTasks.length} more{" "}
            {currentDayTasks.length === 4 ? "task" : "tasks"}.
          </Text>
          <AddTaskModal handleAddTask={handleAddTask} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  dateView: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  dateInfo: {
    textAlign: "center",
    fontSize: 18,
  },
  items: {
    marginTop: 30,
  },
  btnWrapper: {
    marginTop: 20,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },
  noTasksView: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default TaskList;
