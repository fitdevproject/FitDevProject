import React, { useState } from "react";
import { addDays } from "date-fns";
import { StyleSheet, Text, View } from "react-native";
import TaskList from "../components/TaskList";
import { FlatList, Dimensions } from "react-native";
import TaskNavigator from "../components/TaskNavigator";
import { SafeAreaView } from "react-native";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;

const Home = () => {
  const [fitDevDays, setFitDevDays] = useState([
    {
      id: 1,
      date: new Date(),
      dayComplete: false,
      tasks: [
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Stick to my diet",
          complete: true,
        },
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Work on app",
          complete: true,
        },
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Get a lift in",
          complete: true,
        },
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Read 10 pages",
          complete: false,
        },
      ],
    },
    {
      id: 2,
      date: addDays(new Date(), 1),
      dayComplete: false,
      tasks: [
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Create twitter content",
          complete: true,
        },
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Work on FitDevDay Switcher",
          complete: true,
        },
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Mobility work",
          complete: true,
        },
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Read 10 pages",
          complete: false,
        },
      ],
    },
    {
      id: 3,
      date: addDays(new Date(), 2),
      dayComplete: false,
      tasks: [
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Get a workout in",
          complete: true,
        },
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Work on tab navigation for the app",
          complete: true,
        },
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Create twitter content",
          complete: true,
        },
        {
          id: Math.floor(Math.random() * 10000) + 1,
          text: "Read 10 pages",
          complete: false,
        },
      ],
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDay, setCurrentDay] = useState(fitDevDays[currentIndex]);

  const [currentDayTasks, setCurrentDayTasks] = useState(currentDay.tasks);

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

  const onRightArrowClick = () => {
    setCurrentIndex(currentIndex + 1);
    console.warn(currentIndex);
    setCurrentDay(fitDevDays[currentIndex]);
    setCurrentDayTasks(fitDevDays[currentIndex].tasks);
    if (currentIndex === fitDevDays.length - 1) {
      const fitDevDay = {
        id: Math.floor(Math.random() * 10000) + 1,
        date: addDays(currentDay.date, 1),
        dayComplete: false,
        tasks: [
          {
            id: Math.floor(Math.random() * 10000) + 1,
            text: "Create twitter content",
            complete: true,
          },
          {
            id: Math.floor(Math.random() * 10000) + 1,
            text: "Work on FitDevDay Switcher",
            complete: true,
          },
          {
            id: Math.floor(Math.random() * 10000) + 1,
            text: "Mobility work",
            complete: true,
          },
          {
            id: Math.floor(Math.random() * 10000) + 1,
            text: "Read 10 pages",
            complete: false,
          },
          {
            id: Math.floor(Math.random() * 10000) + 1,
            text: "Drink 2 big glasses of water",
            complete: true,
          },
        ],
      };
      setFitDevDays([...fitDevDays, fitDevDay]);
    }
  };

  const onLeftArrowClick = () => {
    setCurrentIndex(currentIndex - 1);
    console.warn(currentIndex);
    setCurrentDay(fitDevDays[currentIndex]);
    setCurrentDayTasks(fitDevDays[currentIndex].tasks);
  };

  return (
    <View>
      {/* <FitDevDay
        currentIndex={currentIndex}
        currentDay={currentDay}
        currentDayTasks={currentDayTasks}
        editTask={editTask}
        onToggleComplete={toggleComplete}
        onRemove={removeTaskById}
        handleAddTask={handleAddTask}
        onRightArrowClick={onRightArrowClick}
        onLeftArrowClick={onLeftArrowClick}
      /> */}
      <Text style={styles.sectionTitle}>Critical Tasks</Text>

      <FlatList
        data={fitDevDays}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.taskListWrapper}>
              <View style={styles.dateView}>
                <TaskNavigator
                  onLeftArrowClick={onLeftArrowClick}
                  currentIndex={currentIndex}
                  onRightArrowClick={onRightArrowClick}
                  currentDay={currentDay}
                />
              </View>
              <TaskList
                currentDayTasks={item.tasks}
                editTask={editTask}
                onToggleComplete={toggleComplete}
                onRemove={removeTaskById}
                handleAddTask={handleAddTask}
              />
            </View>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskListWrapper: {
    width,
    resizeMode: "cover",
  },
  dateView: {
    alignItems: "center",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 80,
  },
});

export default Home;
