import React, { useState, useMemo } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import TaskList from "./TaskList";

const FitDevDay = ({
  currentIndex,
  currentDay,
  currentDayTasks,
  editTask,
  onToggleComplete,
  onRemove,
  handleAddTask,
  onRightArrowClick,
  onLeftArrowClick,
}) => {
  return (
    <View>
      <TaskList
        currentIndex={currentIndex}
        currentDayTasks={currentDayTasks}
        currentDay={currentDay}
        editTask={editTask}
        onToggleComplete={onToggleComplete}
        onRemove={onRemove}
        handleAddTask={handleAddTask}
        onRightArrowClick={onRightArrowClick}
        onLeftArrowClick={onLeftArrowClick}
      />
    </View>
  );
};

export default FitDevDay;
