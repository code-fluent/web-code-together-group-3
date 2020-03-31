const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "developer",
    password: "CODEit!(94",
    database: "todos"
  }
});

exports.listTodos = () => knex.select("id", "title", "isCompleted").from("todos");

exports.createTodo = (title, isCompleted) =>
  knex("todos").insert({ title, isCompleted });

exports.updateTodo = (id, isCompleted) =>
  knex("todos")
    .where({ id })
    .update({ isCompleted });

exports.deleteTodo = id =>
  knex("todos")
    .where({ id })
    .del();
