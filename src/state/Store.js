import { combineReducers, createStore } from "redux";
import { todoReduce } from "./todoReduce";

const rootReducer = combineReducers({
  users: todoReduce.reducer,
});

export const store = createStore(rootReducer);
