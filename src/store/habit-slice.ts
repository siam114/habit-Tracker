import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
  isLoading: boolean;
  error: string | null;
}

// State
const initialState: HabitState = {
  habits: [],
  isLoading: false,
  error: null,
};

const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers:{
        addHabit: () => {},
    },
})

export const {addHabit} = habitSlice.actions;