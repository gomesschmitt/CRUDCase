const { getAllTodosRepository,
        createTodosRepository, 
        updateTodosRepository,
        deleteTodosRepository}
        = require("../repositorys/TodoRepository")

async function getAllTodosService() {
    const response = await getAllTodosRepository()
    return response
}

async function createTodosService(title, priority) {
    const response = await createTodosRepository(title, priority)
    return response
}

async function updateTodosService(id, title, priority) {
    const response = await updateTodosRepository(id, title, priority)
    return response
}

async function deleteTodosService(id) {
    const rowCount = await deleteTodosRepository(id);
    if (rowCount === 1) {
        return { message: "Task Deleted." };
    } else {
        throw new Error("Task not found.");
    }
}

module.exports = {
    getAllTodosService,
    createTodosService,
    updateTodosService,
    deleteTodosService
}