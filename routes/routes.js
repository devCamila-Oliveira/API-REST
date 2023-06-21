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
router.get("/tarefas", TarefaController.listarTarefas);
router.get("/tarefa/:id", TarefaController.exibirTarefa);
router.put("/tarefa/atualizar/:id", TarefaController.atualizarTarefa);
router.delete("/tarefa/remover/:id", TarefaController.removerTarefa);

router.post("/crianca/cadastrar", CriancaController.gravarCrianca);
router.get("/criancas", CriancaController.listarCriancas);
router.get("/crianca/:id", CriancaController.exibirCrianca);
router.put("/crianca/atualizar/:id", CriancaController.atualizarCrianca);
router.delete("/crianca/remover/:id", CriancaController.removerCrianca);

router.post("/tarefaCrianca/cadastrar/:idCrianca/:idTarefa", TarefaCriancaController.gravarTarefaCrianca);
router.put("/tarefaCrianca/atualizar/:idCrianca/:idTarefa", TarefaCriancaController.atualizarTarefaCrianca);
router.get("/tarefasCrianca/:idCrianca", TarefaCriancaController.listarTarefasPorCrianca);
router.get("/tarefaCrianca/:idTarefaCrianca", TarefaCriancaController.exibirTarefaCrianca);
router.delete("/tarefaCrianca/remover/:idTarefaCrianca", TarefaCriancaController.removerTarefaCrianca);

module.exports = router;
