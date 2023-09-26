const express = require('express');
const router = express.Router();

const {
    getAllTodosController,
    createTodosController,
    updateTodosController,
    deleteTodosController
} = require ('../controllers/TodoController')


router.get('/toDos', getAllTodosController)

router.post('/toDos', createTodosController)

router.patch('/toDo/:id', updateTodosController)

router.delete('/toDo/:id', deleteTodosController)


module.exports = router;