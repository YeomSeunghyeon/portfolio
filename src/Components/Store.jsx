import { configureStore } from '@reduxjs/toolkit';
import { authSlice, todoSlice } from './CreateSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    todos: todoSlice.reducer,
  },
});

export const {login,logout}=authSlice.actions;
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default store;
