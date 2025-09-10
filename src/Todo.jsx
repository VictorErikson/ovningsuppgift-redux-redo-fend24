import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./redux/todosSlice";

export default function Todo({ todo }) {
  
  const dispatch = useDispatch();

  
  return (
    <li className="todo-item">
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        className={`todo-text ${todo.done ? "todo-done" : ""}`}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))} className="todo-remove">
        Ta bort
      </button>
    </li>
  );
}
