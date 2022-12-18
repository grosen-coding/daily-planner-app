import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import goalReducer from "../features/goals/goalSlice";
import noteReducer from "../features/notes/noteSlice";
import priorityReducer from "../features/priorities/prioritySlice";
import reminderReducer from "../features/reminders/reminderSlice";
import todoReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    notes: noteReducer,
    priorities: priorityReducer,
    reminders: reminderReducer,
    todos: todoReducer,
  },
});
