export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <>
      <li>
        <label htmlFor="">
          <input
            type="checkbox"
            name=""
            id=""
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </li>
    </>
  );
}
