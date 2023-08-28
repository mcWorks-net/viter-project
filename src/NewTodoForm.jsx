import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label> <br />
          <input
            type="text"
            name=""
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            id="item"
          />
          <button className="btn-add">Add</button>
        </div>
      </form>
    </>
  );
}
