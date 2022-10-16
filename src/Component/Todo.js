import React from "react";

export default function Todo({ todo, TodolistToggle }) {
  function HandleToggle(e) {
    TodolistToggle(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.isComplete}
          onChange={HandleToggle}
        />
        {todo.name}
      </label>
    </div>
  );
}
