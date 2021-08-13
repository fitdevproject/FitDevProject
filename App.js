import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { format, addDays } from "date-fns";
import { StyleSheet, Text, View } from "react-native";
import TaskList from "./components/TaskList";
import { add } from "date-fns/esm";

export default function App() {
  const [fitDevDays, setFitDevDays] = useState([
    {
      id: 1,
      date: addDays(new Date(), -1),
      dayComplete: false,
      tasks: [
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
      ],
    },
    {
      id: 2,
      date: new Date(),
      dayComplete: false,
      tasks: [
        {
          id: 1,
          text: "Create twitter content",
          complete: true,
        },
        {
          id: 2,
          text: "Work on FitDevDay Switcher",
          complete: true,
        },
        {
          id: 3,
          text: "Mobility work",
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
      ],
    },
    {
      id: 3,
      date: addDays(new Date(), 1),
      dayComplete: false,
      tasks: [
        {
          id: 1,
          text: "Get a workout in",
          complete: true,
        },
        {
          id: 2,
          text: "Work on tab navigation for the app",
          complete: true,
        },
        {
          id: 3,
          text: "Create twitter content",
          complete: true,
        },
        {
          id: 4,
          text: "Read 10 pages",
          complete: false,
        },
        {
          id: 5,
          text: "Drink 60oz of water",
          complete: true,
        },
      ],
    },
  ]);

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

  const editTask = (updatedTask, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: updatedTask.text, complete: false }
          : task
      )
    );
  };

  const handleAddTask = (task) => {
    task.id = Math.floor(Math.random() * 10000) + 1;
    setTasks([...tasks, task]);
  };

  return (
    <View style={styles.container}>
      <TaskList
        tasks={tasks}
        editTask={editTask}
        onToggleComplete={toggleComplete}
        onRemove={removeTaskById}
        handleAddTask={handleAddTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
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
