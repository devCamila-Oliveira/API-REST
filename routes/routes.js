const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');

router.post('/gravarTarefa', TarefaController.gravarTarefa);

module.exports = router;