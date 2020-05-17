import axios from "axios";
import { getAuthToken } from "./session";

export const listTodos = async () => {
  const result = await axios.get("http://localhost:8080/todos", {
    headers: { authToken: getAuthToken() },
  });

  return result.data;
};

export const createTodo = (title, isCompleted) =>
  axios.post(
    "http://localhost:8080/todos",
    { title, isCompleted },
    { headers: { authToken: getAuthToken() } }
  );

export const updateTodo = (id, isCompleted) =>
  axios.put(
    `http://localhost:8080/todos/${id}`,
    { isCompleted },
    { headers: { authToken: getAuthToken() } }
  );

export const deleteTodo = (id) =>
  axios.delete(`http://localhost:8080/todos/${id}`, {
    headers: { authToken: getAuthToken() },
  });
