const { Pool } = require('pg');

const options = {
  host: "localhost",
  port: 5432,
  database: "todo",
  user: "postgres",
  password: "wolf123456"
}

const pgPool = new Pool(options) // faz a ligação ao backend

async function getAllTodosRepository() {
  const response = await pgPool.query("SELECT * from tasks");
  return response.rows
}

async function createTodosRepository(title, priority) {
  const response = await pgPool.query("INSERT INTO tasks (title, priority) VALUES ($1, $2)", [title, priority]);
  return response.rows
}

async function updateTodosRepository(id, title, priority) {
  const response = await pgPool.query("UPDATE tasks SET title = $1, priority = $2 WHERE id = $3", [title, priority, id]);
  return response.rows
}

async function deleteTodosRepository(id) {
  const response = await pgPool.query("DELETE FROM tasks WHERE id = $1", [id]);
  return response.rows;
}

module.exports = {
  getAllTodosRepository,
  createTodosRepository,
  updateTodosRepository,
  deleteTodosRepository
}