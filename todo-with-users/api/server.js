const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const database = require("./database");
const accessToken = require("./accessToken");
const authMiddleware = require("./authMiddleware");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signUp", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 4);
  await database.createUser(name, email, hashedPassword);
  res.json();
});

app.post("/signIn", async (req, res) => {
  const { email, password } = req.body;

  const user = await database.findUserByEmail(email);
  if (!user) {
    res.status(401).json({ message: "Invalid credentials." });
    return;
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    res.status(401).json({ message: "Invalid credentials." });
    return;
  }

  const authToken = accessToken.createAccessToken(user);
  res.json({ authToken, user });
});

app.get("/todos", authMiddleware, async (req, res) => {
  const todos = await database.listTodos(req.user.id);
  res.json(todos);
});

app.post("/todos", authMiddleware, async (req, res) => {
  const { title, isCompleted } = req.body;
  await database.createTodo(req.user.id, title, isCompleted);
  res.json();
});

app.put("/todos/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { isCompleted } = req.body;
  await database.updateTodo(req.user.id, id, isCompleted);
  res.json();
});

app.delete("/todos/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  await database.deleteTodo(req.user.id, id);
  res.json();
});

app.listen(8080);
