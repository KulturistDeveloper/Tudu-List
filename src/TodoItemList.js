import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(todo => (
      <TodoItem
        {...todo} //{...todo} Если поставить, то все значения внутри автоматически устанавливаются
        onToggle={onToggle}
        onRemove={onRemove}
        key={todo.id}
      />
    ));
    // const todoList = todos.map(({ id, text, checked }) => (
    //   <TodoItem
    //     id={id}
    //     text={text}
    //     checked={checked}
    //     onToggle={onToggle}
    //     onRemove={onRemove}
    //     key={id}
    //   />
    // ));
    return (
      <div>
        {todoList}
        {/* <TodoItem text="Привет" />
        <TodoItem text="Человек" />
        <TodoItem text="Приятно познакомиться" /> */}
      </div>
    );
  }
}
export default TodoItemList;
