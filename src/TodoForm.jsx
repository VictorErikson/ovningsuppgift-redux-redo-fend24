import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todosSlice";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    // addTodo(input);
    dispatch(addTodo(input))
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Skriv en uppgift..."
      />
      <button type="submit" className="todo-button">
        Lägg till
      </button>
    </form>
  );
}
