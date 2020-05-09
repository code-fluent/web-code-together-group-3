const config = require("./config");
const knex = require("knex")(config);

exports.createUser = (name, email, password) =>
  knex("users").insert({ name, email, password });

exports.findUserByEmail = async (email) => {
  const users = await knex
    .select("id", "name", "email", "password")
    .where({ email })
    .from("users");

  return users.length === 0 ? undefined : users[0];
};

exports.listTodos = (userId) =>
  knex.select("id", "title", "isCompleted").where({ userId }).from("todos");

exports.createTodo = (userId, title, isCompleted) =>
  knex("todos").insert({ userId, title, isCompleted });

exports.updateTodo = (userId, id, isCompleted) =>
  knex("todos").where({ id, userId }).update({ isCompleted });

exports.deleteTodo = (userId, id) => knex("todos").where({ userId, id }).del();
