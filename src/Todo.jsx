export default function Todo({ todo, toggleTodo, removeTodo }) {
  return (
    <li className="todo-item">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`todo-text ${todo.done ? "todo-done" : ""}`}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)} className="todo-remove">
        Ta bort
      </button>
    </li>
  );
}
