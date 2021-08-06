import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Stick to my diet",
      complete: true,
    },
    {
      id: 2,
      text: "Work on app",
      complete: true,
    },
    {
      id: 3,
      text: "Get a lift in",
      complete: true,
    },
    {
      id: 4,
      text: "Read 10 pages",
      complete: false,
    },
    {
      id: 5,
      text: "Drink 2 big glasses of water",
      complete: true,
    },
  ]);

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  const removeTaskById = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAddTask = () => {
    setTasks(...tasks, task);
  };

  return (
    <View style={styles.container}>
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onRemove={removeTaskById}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
