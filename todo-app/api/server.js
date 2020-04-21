const express = require("express");
const cors = require("cors");
const database = require("./database");

const app = express();
app.use(express.json());
app.use(cors())

app.get("/todos", async (req, res) => {
  const todos = await database.listTodos();
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const { title, isCompleted } = req.body;
  await database.createTodo(title, isCompleted);
  res.json();
});

app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { isCompleted } = req.body;

  await database.updateTodo(id, isCompleted);
  res.json();
});

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  await database.deleteTodo(id);
  res.json();
});

app.listen(8080);
