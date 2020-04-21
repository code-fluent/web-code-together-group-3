import React, { Component } from "react";
import { listTodos, createTodo, updateTodo, deleteTodo } from "./todos";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: [],
      filter: "ALL",
    };
  }

  updateTodo = async (id, isCompleted) => {
    await updateTodo(id, isCompleted);
    const todos = await listTodos();
    this.setState({ todos });
  };

  async componentDidMount() {
    const todos = await listTodos();
    this.setState({ todos });
  }

  onInputChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };

  onInputKeyPress = async (event) => {
    if (event.nativeEvent.keyCode === 13) {
      await createTodo(this.state.inputValue, false);
      const todos = await listTodos();
      this.setState({ todos });
    }
  };

  render() {
    return (
      <div>
        <input
          className="input"
          value={this.state.inputValue}
          onChange={this.onInputChange}
          onKeyPress={this.onInputKeyPress}
        />

        {this.state.todos.map((todo) => {
          return (
            <label key={todo.id} className="todo">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={(event) => {
                  this.updateTodo(todo.id, event.target.checked);
                }}
              />
              {todo.title}
            </label>
          );
        })}
      </div>
    );
  }
}

export default TodoList;
