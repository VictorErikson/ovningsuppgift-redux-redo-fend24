import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((store) => store. todos.todos)
  
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}
