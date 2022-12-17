import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import priorityService from "./priorityService";

const initialState = {
  priorities: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new priority
export const createPriority = createAsyncThunk(
  "priorities/create",
  async (priorityData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await priorityService.createPriority(priorityData, token);
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

// Get user top priorities
export const getPriorities = createAsyncThunk(
  "priorities/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await priorityService.getPriorities(token);
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

// Delete user priority
export const deletePriority = createAsyncThunk(
  "priorities/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await priorityService.deletePriority(id, token);
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

export const prioritySlice = createSlice({
  name: "priority",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPriority.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPriority.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.priorities.push(action.payload);
      })
      .addCase(createPriority.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPriorities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPriorities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.priorities = action.payload;
      })
      .addCase(getPriorities.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletePriority.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePriority.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.priorities = state.priorities.filter(
          (priority) => priority._id !== action.payload.id
        );
      })
      .addCase(deletePriority.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = prioritySlice.actions;
export default prioritySlice.reducer;
