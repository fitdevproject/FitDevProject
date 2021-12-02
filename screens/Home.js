import React, { useState, useRef, useEffect } from "react";
import { addDays } from "date-fns";
import { StyleSheet, View, Text } from "react-native";
import TaskList from "../components/TaskList";
import { FlatList, Dimensions } from "react-native";
import TaskNavigator from "../components/TaskNavigator";
import Swiper from "react-native-swiper";

const width = Dimensions.get("window").width;

const Home = () => {
  const swiperRef = useRef();
  const [fitDevDays, setFitDevDays] = useState([]);
  const [currentDay, setCurrentDay] = useState();
  const getTodaysFitDevDayIndex = () => {
    let indexToReturn = 0;
    if (fitDevDays !== null) {
      let todaysDate = new Date();
      indexToReturn = fitDevDays.findIndex(
        (day) => day.date.getDay() === todaysDate.getDay()
      );
      if (indexToReturn === -1) {
        indexToReturn = 0;
      }
    }
    return indexToReturn;
  };
  const [currentIndex, setCurrentIndex] = useState(getTodaysFitDevDayIndex());
  const onRightArrowClick = () => {
    if (currentIndex < fitDevDays.length - 1) {
      swiperRef.current.scrollBy(1, true);
    }
  };

  const onLeftArrowClick = () => {
    if (currentIndex > 0) {
      swiperRef.current.scrollBy(-1, true);
    }
  };

  const createFitDevDay = () => {
    const fitDevDay = {
      id: Math.floor(Math.random() * 10000) + 1,
      date:
        fitDevDays.length > 0
          ? addDays(fitDevDays[fitDevDays.length - 1].date, 1)
          : new Date(),
      dayComplete: false,
      tasks: [],
    };
    setFitDevDays([...fitDevDays, fitDevDay]);
  };

  useEffect(() => {
    if (fitDevDays.length === 0) {
      createFitDevDay();
      setCurrentIndex(getTodaysFitDevDayIndex());
    }
    if (currentIndex === fitDevDays.length - 1) {
      createFitDevDay();
    }
  });

  return (
    <>
      <View style={styles.taskNavigator}>
        {fitDevDays.length > 0 ? (
          <TaskNavigator
            onLeftArrowClick={onLeftArrowClick}
            onRightArrowClick={onRightArrowClick}
            currentDay={fitDevDays[currentIndex]}
          />
        ) : (
          <Text></Text>
        )}
      </View>

      <Swiper
        autoplayDirection={false}
        autoplay={false}
        loop={false}
        showsPagination={false}
        ref={swiperRef}
        index={getTodaysFitDevDayIndex()}
        onIndexChanged={(index) =>
          setTimeout(() => {
            setCurrentIndex(index);
          }, 0)
        }
      >
        {fitDevDays.map((day) => (
          <TaskList key={day.id} currentDayTasks={day.tasks} />
        ))}
      </Swiper>
      {/* <FlatList
        data={fitDevDays}
        ref={flatListRef}
        extraData={fitDevDays}
        initialScrollIndex={getTodaysFitDevDayIndex()}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.taskListWrapper}>
              <View style={styles.dateView}>
                <TaskNavigator
                  onLeftArrowClick={onLeftArrowClick}
                  onRightArrowClick={onRightArrowClick}
                  currentDay={item}
                />
              </View>
              <TaskList currentDayTasks={item.tasks} />
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  homeView: {
    marginTop: 10,
  },
  taskNavigator: {
    alignItems: "center",
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
