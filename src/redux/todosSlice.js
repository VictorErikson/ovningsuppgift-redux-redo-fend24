import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Children, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const todosSlice = createSlice({
    name: "todosSlice",
    initialState: {
        todos: [{id:2, text: "test", done: true}]
    },
    reducers:{
        addTodo: (state, action) => {  
            state.todos = [...state.todos, { id: Date.now(), text: action.payload, done: false }];
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        )},
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, toggleTodo, removeTodo} = todosSlice.actions;
export default todosSlice.reducer
