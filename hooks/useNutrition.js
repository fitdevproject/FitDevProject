import { useRecoilState, useRecoilValue } from "recoil";
import {
  weeklyTrackedCaloriesState,
  dailyCalorieGoalState,
  dailyProteinGoalState,
  todaysCaloriesState,
  todaysProteinState,
  tempDailyCalorieGoalState,
  tempDailyProteinGoalState,
} from "../atoms/NutritionState";

export const useNutrition = () => {
  //Calorie information
  const [dailyCalorieGoal, setDailyCalorieGoal] = useRecoilState(
    dailyCalorieGoalState
  );
  const [tempDailyCalorieGoal, setTempDailyCalorieGoal] = useRecoilState(
    tempDailyCalorieGoalState
  );
  const [todaysCalories, setTodaysCalories] =
    useRecoilState(todaysCaloriesState);
  const caloriesRemaining = dailyCalorieGoal - todaysCalories;
  const calorieProgressBar =
    (dailyCalorieGoal - caloriesRemaining) / dailyCalorieGoal;
  const [weeklyTrackedCalories, setWeeklyTrackedCalories] = useRecoilState(
    weeklyTrackedCaloriesState
  );
  const weeklyCaloriesRemaining = dailyCalorieGoal * 7 - weeklyTrackedCalories;
  const tempWeeklyCalories = tempDailyCalorieGoal * 7;

  //Protein information
  const [dailyProteinGoal, setDailyProteinGoal] = useRecoilState(
    dailyProteinGoalState
  );
  const [tempDailyProteinGoal, setTempDailyProteinGoal] = useRecoilState(
    tempDailyProteinGoalState
  );
  const [todaysProtein, setTodaysProtein] = useRecoilState(todaysProteinState);
  const proteinRemaining = dailyProteinGoal - todaysProtein;
  const proteinProgressBar =
    (dailyProteinGoal - proteinRemaining) / dailyProteinGoal;

  const calculateCalorieGoal = (
    goalName,
    activityName,
    goalWeight,
    currentWeight
  ) => {
    if (goalName === "Lose Fat") {
      if (activityName === "Sedentary") {
        setTempDailyCalorieGoal(goalWeight * 10);
      } else {
        setTempDailyCalorieGoal(goalWeight * 12);
      }
    }
    if (goalName === "Maintain") {
      if (activityName === "Sedentary") {
        setTempDailyCalorieGoal(currentWeight * 13);
      } else {
        setTempDailyCalorieGoal(currentWeight * 14);
      }
    }
    if (goalName === "Build Muscle") {
      if (activityName === "Sedentary") {
        setTempDailyCalorieGoal(currentWeight * 15);
      } else {
        setTempDailyCalorieGoal(currentWeight * 16);
      }
    }
  };

  const calculateProteinGoal = (sex, goalWeight) => {
    if (sex === "Female") {
      setTempDailyProteinGoal(Math.trunc(goalWeight * 0.8));
    } else {
      setTempDailyProteinGoal(goalWeight);
    }
  };

  const setResults = () => {
    setDailyCalorieGoal(tempDailyCalorieGoal);
    setDailyProteinGoal(tempDailyProteinGoal);
  };

  const clearTempResults = () => {
    setTempDailyCalorieGoal(0);
    setTempDailyProteinGoal(0);
  };

  const updateCalorieInfo = (calories) => {
    let tempTodaysCalories = todaysCalories;
    let tempWeeklyTrackedCalories = weeklyTrackedCalories;
    setTodaysCalories((tempTodaysCalories += calories));
    setWeeklyTrackedCalories((tempWeeklyTrackedCalories += calories));
  };
  const updateProteinInfo = (protein) => {
    let tempProtein = todaysProtein;
    setTodaysProtein((tempProtein += protein));
  };

  return {
    dailyCalorieGoal,
    tempDailyCalorieGoal,
    todaysCalories,
    caloriesRemaining,
    calorieProgressBar,
    dailyProteinGoal,
    tempDailyProteinGoal,
    todaysProtein,
    proteinRemaining,
    proteinProgressBar,
    weeklyTrackedCalories,
    weeklyCaloriesRemaining,
    tempWeeklyCalories,
    calculateCalorieGoal,
    calculateProteinGoal,
    setResults,
    clearTempResults,
    updateCalorieInfo,
    updateProteinInfo,
  };
};
