import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        todos: todosSlice
    }
})

export default store