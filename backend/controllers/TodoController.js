const { getAllTodosService,
        createTodosService,
        updateTodosService,
        deleteTodosService }
        = require("../services/TodoServices")

async function getAllTodosController(req, res) {
    const response = await getAllTodosService()
    res.status(200).json(response)
    return response
}

async function createTodosController(req, res) {
    const { title, priority } = req.body;
    const response = await createTodosService(title, priority);

    if (response) {
        res.status(201).json(response); // Use o código 201 para criação bem-sucedida
    } else {
        res.status(500).json({ error: "Erro ao criar a tarefa." }); // Use o código 500 para erros internos do servidor
    }
}

async function updateTodosController(req, res) {
    const { id } = req.params;
    const { title, priority } = req.body;
    const response = await updateTodosService(id, title, priority);
    res.status(200).json(response);
}

async function deleteTodosController(req, res) {
    const { id } = req.params;
    try {
        await deleteTodosService(id);
        res.status(204).send(); // Use o código 204 para indicação de sucesso sem conteúdo
    } catch (error) {
        res.status(404).json({ error: error.message }); // Use o código 404 para recurso não encontrado
    }
}


module.exports = {
    getAllTodosController,
    createTodosController,
    updateTodosController,
    deleteTodosController
}