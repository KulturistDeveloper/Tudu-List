import React from "react";
import "./TodoListTemplate.css";
const TodoListTemplate = ({ form, children, palette }) => {
  return (
    <main className="todo-list-template">
      <div className="title">Добро пожаловать в TodoList</div>
      <div className="form-wrapper">{form}</div>
      <div className="todos-wrapper">{children}</div>
      <div className="palette">{palette}</div>
    </main>
  );
};
export default TodoListTemplate;
