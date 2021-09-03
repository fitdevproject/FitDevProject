import React, { useState } from "react";
import { addDays } from "date-fns";
import { StyleSheet, View } from "react-native";
import TaskList from "../components/TaskList";
import { FlatList, Dimensions } from "react-native";
import TaskNavigator from "../components/TaskNavigator";
import { ScrollView } from "react-native";

const width = Dimensions.get("window").width;

const Home = () => {
  const [fitDevDays, setFitDevDays] = useState([
    {
      id: 1,
      date: addDays(new Date(), -1),
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
      id: 2,
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
      id: 3,
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
      id: 4,
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

  // const onRightArrowClick = () => {
  //   setCurrentIndex(currentIndex + 1);
  //   console.warn(currentIndex);
  //   setCurrentDay(fitDevDays[currentIndex]);
  //   setCurrentDayTasks(fitDevDays[currentIndex].tasks);
  //   if (currentIndex === fitDevDays.length - 1) {
  //     const fitDevDay = {
  //       id: Math.floor(Math.random() * 10000) + 1,
  //       date: addDays(currentDay.date, 1),
  //       dayComplete: false,
  //       tasks: [
  //         {
  //           id: Math.floor(Math.random() * 10000) + 1,
  //           text: "Create twitter content",
  //           complete: true,
  //         },
  //         {
  //           id: Math.floor(Math.random() * 10000) + 1,
  //           text: "Work on FitDevDay Switcher",
  //           complete: true,
  //         },
  //         {
  //           id: Math.floor(Math.random() * 10000) + 1,
  //           text: "Mobility work",
  //           complete: true,
  //         },
  //         {
  //           id: Math.floor(Math.random() * 10000) + 1,
  //           text: "Read 10 pages",
  //           complete: false,
  //         },
  //         {
  //           id: Math.floor(Math.random() * 10000) + 1,
  //           text: "Drink 2 big glasses of water",
  //           complete: true,
  //         },
  //       ],
  //     };
  //     setFitDevDays([...fitDevDays, fitDevDay]);
  //   }
  // };

  // const onLeftArrowClick = () => {
  //   setCurrentIndex(currentIndex - 1);
  //   console.warn(currentIndex);
  //   setCurrentDay(fitDevDays[currentIndex]);
  //   setCurrentDayTasks(fitDevDays[currentIndex].tasks);
  // };

  return (
    <ScrollView>
      <View style={styles.homeView}>
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
                    // onLeftArrowClick={onLeftArrowClick}
                    // onRightArrowClick={onRightArrowClick}
                    currentDay={item}
                  />
                </View>
                <TaskList currentDayTasks={item.tasks} />
              </View>
            );
          }}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeView: {
    marginTop: 10,
  },
  taskListWrapper: {
    width,
    resizeMode: "cover",
  },
  dateView: {
    alignItems: "center",
  },
});

export default Home;
