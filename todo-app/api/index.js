const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "developer",
    password: "CODEit!(94",
    database: "todos"
  }
});

const createTodo = (title, isCompleted) =>
  knex("todos").insert({ title, isCompleted });

const toggleTodo = (id, isCompleted) =>
  knex("todos")
    .where("id", "=", id)
    .update({ isCompleted });

const deleteTodo = id =>
  knex("todos")
    .where("id", "=", id)
    .del();

const listTodos = () => knex.select("id", "title", "isCompleted").from("todos");

const run = async () => {
  // await createTodo("Create your first todo.", 0);
  // await createTodo("Create your second todo.", 0);
  // await createTodo("Create your third todo.", 0);
  // await toggleTodo(2, 1);
  // await deleteTodo(3);
  // const todos = await listTodos();
  // console.log("Todos: ", todos);
  const hashedPassword = await hashPassword('password')
  const user = await createUser('username', hashedPassword)
  await sendWelcomeEmail('tamas@tamaspap.com')
};

run();
