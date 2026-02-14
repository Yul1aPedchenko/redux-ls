import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("task/add");
export const deleteTask = createAction("task/delete");
export const toggleComplete = createAction('task/omplete');