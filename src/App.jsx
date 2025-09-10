import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";

export default function App() {

  return (
    <div className="app-container">
      <h1 className="app-title">Todo App (useState)</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
