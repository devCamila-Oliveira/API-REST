const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');

router.post('/tarefa/cadastrar', TarefaController.gravarTarefa);
router.get('/tarefas', TarefaController.consultarTarefas);
router.get('/tarefa/:id', TarefaController.consultarTarefa);
router.put('/tarefa/atualizar/:id', TarefaController.atualizarTarefa);
router.delete('/tarefa/remover/:id', TarefaController.removerTarefa);

module.exports = router;