const connection = require("../database/connection");
const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const TarefaController = require("../controllers/TarefaController");
const TarefaCriancaController = require("../controllers/TarefaCriancaController");
const CriancaController = require("../controllers/CriancaController");

router.post("/registrar", LoginController.register)
router.post("/login", LoginController.login)

router.post("/tarefa/cadastrar", TarefaController.gravarTarefa);
router.get("/tarefas", TarefaController.consultarTarefas);
router.get("/tarefa/:id", TarefaController.consultarTarefa);
router.put("/tarefa/atualizar/:id", TarefaController.atualizarTarefa);
router.delete("/tarefa/remover/:id", TarefaController.removerTarefa);

router.post("/crianca/cadastrar", CriancaController.gravarCrianca);
router.get("/criancas", CriancaController.consultarCriancas);
router.get("/crianca/:id", CriancaController.consultarCrianca);
router.put("/crianca/atualizar/:id", CriancaController.atualizarCrianca);
router.delete("/crianca/remover/:id", CriancaController.removerCrianca);

router.post("/tarefa/cadastrar/:idCrianca/:idTarefa", TarefaController.gravarTarefa);

module.exports = router;
