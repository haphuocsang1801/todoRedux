// const initialState = [
//   {
//     id: 1,
//     name: "Learn redux",
//     completed: false,
//     priority: "Medium",
//   },
//   {
//     id: 2,
//     name: "Learn react",
//     completed: true,
//     priority: "Medium",
//   },
//   {
//     id: 3,
//     name: "Learn nextjs",
//     completed: false,
//     priority: "High",
//   },
// ];
// const todoListReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };
// export default todoListReducer;
import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      name: "Learn redux",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "Learn react",
      completed: true,
      priority: "Medium",
    },
    {
      id: 3,
      name: "Learn nextjs",
      completed: false,
      priority: "High",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo && (currentTodo.completed = !currentTodo.completed);
    },
  },
});
