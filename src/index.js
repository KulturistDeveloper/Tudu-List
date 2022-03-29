import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import TodoListTemplate from "./TodoListTemplate";
import Form from "./Form";
//import TodoItemList from "./TodoItemList";
import TodoItemList from "./TodoItemLists";
import Palette from "./Palette";

const colors = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];

class App extends Component {
  id = 3; //0, 1, 2 (первые три уже существуют) поэтому ставим 3
  state = {
    input: "",
    todos: [
      { id: 0, text: "Задача 1", checked: false },
      { id: 1, text: "Задача 2", checked: true },
      { id: 2, text: "Задача 3", checked: false }
    ],
    color: "#343a40"
  };
  handleChange = e => {
    this.setState({
      input: e.target.value //следующее изменения значения ввода
    });
  };
  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: "", //очистить ввод
      todos: todos.concat({
        //добавляем в массив с помощью concat
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  };
  handleKeyPress = e => {
    if (e.key === "Enter") {
      //при нажатии Enter вызываем handleCreate
      this.handleCreate();
    }
  };
  handleToggle = id => {
    const { todos } = this.state;
    // Найдите номер элемента с идентификатором, полученным в качестве параметра.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; //выбираем объект
    //const nextTodos = [...todos];
    //скопируем существующие значения и перезапишем проверенные значения
    // nextTodos[index] = {
    //   ...selected,
    //   checked: !selected.checked
    // };
    // this.setState({
    //   todos: nextTodos
    // });
    // другой путь
    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    });
  };
  //убрать задачу
  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };
  //цвет
  handleSelectColor = color => {
    this.setState({
      color
    });
  };
  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;
    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={color}
          />
        }
        palette={
          <Palette
            colors={colors}
            selected={color}
            onSelect={handleSelectColor}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
