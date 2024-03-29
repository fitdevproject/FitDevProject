import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";

const TaskList = (props) => {
  const [currentDayTasks, setCurrentDayTasks] = useState(props.currentDayTasks);
  const isEditDisabled = useMemo(() => {
    let completedTasks = currentDayTasks.filter((task) => task.complete);
    return completedTasks.length === currentDayTasks.length;
  }, [currentDayTasks]);

  const toggleComplete = (id) => {
    setCurrentDayTasks(
      currentDayTasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  const removeTaskById = (id) => {
    setCurrentDayTasks(currentDayTasks.filter((task) => task.id !== id));
  };

  const editTask = (updatedTask, id) => {
    setCurrentDayTasks(
      currentDayTasks.map((task) =>
        task.id === id
          ? { ...task, text: updatedTask.text, complete: false }
          : task
      )
    );
  };

  const handleAddTask = (task) => {
    task.id = Math.floor(Math.random() * 10000) + 1;
    setCurrentDayTasks([...currentDayTasks, task]);
  };

  return (
    <View style={styles.taskWrapper}>
      {currentDayTasks.length > 0 && (
        <View style={styles.items}>
          {currentDayTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              editTask={editTask}
              onToggleComplete={toggleComplete}
              onRemove={removeTaskById}
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
    paddingHorizontal: 20,
  },
  dateView: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  disabled: {
    backgroundColor: "#F8F8F8",
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
