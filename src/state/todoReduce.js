import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

export const todoReduce = createSlice({
  name: "TODO",
  id: nanoid(),
  title: "TITLE",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) =>
      state.filter((user) => user.id !== action.payload),
    edit: (state, action) => {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, ...action.payload.data };
        }
        return user;
      });
    },
  },
});

// const defaultState = [];

// const ADD = "TODOS_ADD";
// const REMOVE = "TODOS_REMOVE";

// export function addTodos(todo) {
//   return {
//     type: ADD,
//     payload: {
//       id: nanoid(),
//       todoItem: todo,
//     },
//   };
// }

// export function removeTodos(id) {
//   return {
//     type: REMOVE,
//     payload: id,
//   };
// }

// export function todoReducer(state = defaultState, action) {
//   switch (action.type) {
//     case ADD: {
//       return [...state, action.payload];
//     }

//     case REMOVE: {
//       return state.filter((todo) => todo.id !== action.payload);
//     }

//     default:
//       return state;
//   }
// }
