import { atom, selector } from "recoil";

//Calorie info
export const dailyCalorieGoalState = atom({
  key: "dailyCalorieGoalState",
  default: 0,
});
export const tempDailyCalorieGoalState = atom({
  key: "tempDailyCalorieGoalState",
  default: 0,
});
export const todaysCaloriesState = atom({
  key: "todayasCaloriesState",
  default: 0,
});
export const weeklyTrackedCaloriesState = atom({
  key: "weeklyTrackedCaloriesState",
  default: 0,
});

//Protein info
export const dailyProteinGoalState = atom({
  key: "dailyProteinGoalState",
  default: 0,
});
export const tempDailyProteinGoalState = atom({
  key: "tempDailyProteinGoalState",
  default: 0,
});
export const todaysProteinState = atom({
  key: "todaysProteinState",
  default: 0,
});
