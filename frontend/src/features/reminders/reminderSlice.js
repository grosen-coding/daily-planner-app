import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reminderService from "./reminderService";

const initialState = {
  reminders: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new reminder
export const createReminder = createAsyncThunk(
  "reminders/create",
  async (reminderData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await reminderService.createReminder(reminderData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user reminders
export const getReminders = createAsyncThunk(
  "reminders/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await reminderService.getReminders(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user Remind
export const deleteReminder = createAsyncThunk(
  "reminders/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await reminderService.deleteReminder(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReminder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReminder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reminders.push(action.payload);
      })
      .addCase(createReminder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getReminders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReminders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reminders = action.payload;
      })
      .addCase(getReminders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteReminder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteReminder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reminders = state.reminders.filter(
          (reminder) => reminder._id !== action.payload.id
        );
      })
      .addCase(deleteReminder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = reminderSlice.actions;
export default reminderSlice.reducer;
