import React, { useState, useMemo } from "react";
import { View } from "react-native";
import TaskList from "./TaskList";

const FitDevDay = ({
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
