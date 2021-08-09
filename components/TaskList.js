import React, { useState, useMemo } from "react";
import { format, addDays } from "date-fns";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { Alert, Modal, StyleSheet, Text, View, Button } from "react-native";
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";

const TaskList = ({
  tasks,
  editTask,
  onToggleComplete,
  onRemove,
  handleAddTask,
}) => {
  const [todaysDate, setTodaysDate] = useState(new Date());

  const isEditDisabled = useMemo(() => {
    let completedTasks = tasks.filter((task) => task.complete);
    return completedTasks.length === tasks.length;
  }, [tasks]);

  const onRightArrowClick = () => {
    let tempDate = new Date();
    tempDate.setHours(0, 0, 0, 0);
    if (todaysDate < tempDate) {
      setTodaysDate(addDays(todaysDate, 1));
    }
  };

  const onLeftArrowClick = () => {
    setTodaysDate(addDays(todaysDate, -1));
  };

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
          {format(todaysDate, "cccc LLLL d, yyyy")}
        </Text>
        <Icon
          iconStyle={styles.editIcon}
          size={30}
          name="east"
          onPress={onRightArrowClick}
        />
      </View>
      {tasks.length > 0 && (
        <View style={styles.items}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              editTask={editTask}
              onToggleComplete={onToggleComplete}
              onRemove={onRemove}
              tasks={tasks}
              isEditDisabled={isEditDisabled}
            />
          ))}
        </View>
      )}
      {tasks.length < 5 && (
        <View style={styles.btnWrapper}>
          <Text>
            You can add up to {5 - tasks.length} more{" "}
            {tasks.length === 4 ? "task" : "tasks"}.
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
