import React from "react";
import Todo from "./Todo";

export default function Todolist({ todos, toggleTodoFromApp }) {
  console.log(todos);

  return todos.map((element) => {
    return (
      <Todo
        key={element.id}
        todo={element}
        TodolistToggle={toggleTodoFromApp}
      />
    );
  });
}
