import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import goalReducer from "../features/goals/goalSlice";
import noteReducer from "../features/notes/noteSlice";
import priorityReducer from "../features/priorities/prioritySlice";
import reminderReducer from "../features/reminders/reminderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    notes: noteReducer,
    priorities: priorityReducer,
    reminders: reminderReducer,
  },
});
