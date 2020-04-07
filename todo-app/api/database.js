const config = require("./config");
const knex = require("knex")(config);

exports.listTodos = () =>
  knex.select("id", "title", "isCompleted").from("todos");

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
