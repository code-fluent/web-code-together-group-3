const express = require("express");
const database = require("./database");

const app = express();
app.use(express.json());

app.get("/todos", async (req, res) => {
  const todos = await database.listTodos();
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const title = req.body.title;
  const isCompleted = req.body.isCompleted;

  await database.createTodo(title, isCompleted);
  res.json();
});

app.put("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const isCompleted = req.body.isCompleted;

  await database.updateTodo(id, isCompleted);
  res.json();
});

app.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;
  await database.deleteTodo(id);
  res.json();
});

app.listen(8080);
