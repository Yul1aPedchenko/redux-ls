import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("l31/addTask");
export const deleteTask = createAction("l31/deleteTask");
export const toggleComplete = createAction("l31/completeTask");

export const setStatusFilter = createAction("l31/setFilter");
