import { useRecoilState } from "recoil";
import {
  calorieProgressBarState,
  caloriesRemainingState,
  dailyCalorieGoalState,
  dailyProteinGoalState,
  proteinProgressBarState,
  proteinRemainingState,
  todaysCaloriesState,
  todaysProteinState,
  weeklyCaloriesState,
} from "../atoms/NutritionState";

export const useNutrition = () => {
  const [dailyCalorieGoal, setDailyCalorieGoal] = useRecoilState(
    dailyCalorieGoalState
  );
  const [todaysCalories, setTodaysCalories] =
    useRecoilState(todaysCaloriesState);
  const [caloriesRemaining, setCaloriesRemainingState] = useRecoilState(
    caloriesRemainingState
  );
  const [calorieProgressBar, setCalorieProgressBarState] = useRecoilState(
    calorieProgressBarState
  );
  const [dailyProteinGoal, setDailyProteinGoal] = useRecoilState(
    dailyProteinGoalState
  );
  const [todaysProtein, setTodaysProtein] = useRecoilState(todaysProteinState);
  const [proteinRemaining, setProteinRemaining] = useRecoilState(
    proteinRemainingState
  );
  const [proteinProgressBar, setProteinProgressBar] = useRecoilState(
    proteinProgressBarState
  );
  const [weeklyCalories, setWeeklyCaloriesState] =
    useRecoilState(weeklyCaloriesState);

  return {
    dailyCalorieGoal,
    todaysCalories,
    caloriesRemaining,
    calorieProgressBar,
    dailyProteinGoal,
    todaysProtein,
    proteinRemaining,
    proteinProgressBar,
    weeklyCalories,
  };
};
