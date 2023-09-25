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

router.patch('/toDos/:id', updateTodosController)

router.delete('/toDos/:id', deleteTodosController)


module.exports = router;