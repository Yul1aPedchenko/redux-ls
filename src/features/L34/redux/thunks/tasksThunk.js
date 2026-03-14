import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_TODOS_API;

axios.defaults.baseURL = BASE_URL;

export const fetchTasks = createAsyncThunk("l34/fetchTasks", async (_, thunkAPI) => {
  try {
    const r = await axios.get("tasks");
    return r.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTaskAsync = createAsyncThunk("l34/addTask", async (text, thunkAPI) => {
  try {
    const newTask = {
      text,
      completed: false,
    };

    const r = await axios.post("/tasks", newTask);
    return r.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTaskAsync = createAsyncThunk("l34/deleteTask", async (id, thunkAPI) => {
  try {
    await axios.delete(`/tasks/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const toggleTaskAsync = createAsyncThunk("l34/toggleTask", async (task, thunkAPI) => {
  try {
    const r = await axios.put(`/tasks/${task.id}`, {
      ...task,
      completed: !task.completed,
    });
    return r.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});