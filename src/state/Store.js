import { combineReducers, createStore } from "redux";
import { counterState } from "./CounterState";
import { todoReduce } from "./todoReduce";

const rootReducer = combineReducers({
  counter: counterState.reducer,
  users: todoReduce.reducer,
});

export const store = createStore(rootReducer);
