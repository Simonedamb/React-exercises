import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { counterState } from "./counterState";
import { todoReduce } from "./todoReduce";

const rootReducer = combineReducers({
  counter: counterState.reducer,
  users: todoReduce.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
