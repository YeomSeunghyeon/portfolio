import { configureStore, createSlice } from '@reduxjs/toolkit';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const initialState = {   
    isAuthenticated: false,
    user: null,
  };   
  const authSlice = createSlice({
      name: 'auth', // slice 이름
      initialState, // 초기 상태
      reducers: {
        login: (state, action) => {
          if (action.payload === 'ysh') {
            state.isAuthenticated = true;
            state.user = action.payload;
          }
        },
        logout: (state) => {
          state.isAuthenticated = false;
          state.user = null;
        },
      },
    });
    const todoSlice = createSlice({
        name: 'todoReducer',              
        initialState: [],                        
        reducers: {                             
          addTodo: (state, action) => {  
            state.push({                      
              id: Date.now(),              
              text: action.payload,          
              completed: false,
            });
          },
          toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed; 
            }
          },
          deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
          },
        },
      });
    
    export { todoSlice };
    export  {authSlice}