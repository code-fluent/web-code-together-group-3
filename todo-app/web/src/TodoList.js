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

  deleteTodo = async (id) => {
    await deleteTodo(id);
    const todos = await listTodos();
    this.setState({ todos });
  };

  setFilterToAll = () => {
    this.setState({ filter: "ALL" });
  };

  setFilterToCompleted = () => {
    this.setState({ filter: "COMPLETED" });
  };

  setFilterToIncompleted = () => {
    this.setState({ filter: "INCOMPLETED" });
  };

  filterTodos = (todos, filter) => {
    if (filter === "ALL") {
      return todos;
    }

    if (filter === "COMPLETED") {
      return todos.filter((todo) => todo.isCompleted === 1);
    }

    if (filter === "INCOMPLETED") {
      return todos.filter((todo) => todo.isCompleted === 0);
    }
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
      this.setState({ todos, inputValue: "" });
    }
  };

  render() {
    const filteredTodos = this.filterTodos(this.state.todos, this.state.filter);

    return (
      <div className="container">
        <input
          className="input"
          value={this.state.inputValue}
          onChange={this.onInputChange}
          onKeyPress={this.onInputKeyPress}
        />

        <div className="todos">
          {filteredTodos.map((todo) => {
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
                <button onClick={() => this.deleteTodo(todo.id)}>x</button>
              </label>
            );
          })}
        </div>

        <div>
          <button onClick={this.setFilterToAll}>All</button>
          <button onClick={this.setFilterToCompleted}>Completed</button>
          <button onClick={this.setFilterToIncompleted}>Incompleted</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
