var database = require("../database/connection");

class TarefaController {
    gravarTarefa(req, res) {
        const { nome, descricao, pontuacaoBase } = req.body;

        database("tarefa")
            .insert({ nome, descricao, pontuacaoBase })
            .then((data) => {
                res.json({ message: "Tarefa criada com sucesso." });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    listarTarefas(req, res) {
        database("tarefa")
            .select()
            .then((tarefas) => {
                res.json(tarefas);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }

    exibirTarefa(req, res) {
        let { id } = req.params;
        database("tarefa")
            .where({ idTarefa: id })
            .select()
            .then((tarefa) => {
                res.json(tarefa);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }

    atualizarTarefa(req, res) {
        let { id } = req.params;
        let { nome, descricao, pontuacaoBase } = req.body;

        database("tarefa")
            .where({ idTarefa: id })
            .update({
                nome: nome,
                descricao: descricao,
                pontuacaoBase: pontuacaoBase,
            })
            .then((data) => {
                res.json({ message: "Tarefa atualizada com sucesso." });
            })
            .catch((err) => {
                res.json(err);
            });
    }

    removerTarefa(req, res) {
        let { id } = req.params;

        database("tarefa")
            .where({ idTarefa: id })
            .del()
            .then((data) => {
                res.json({ message: "Tarefa removida com sucesso." });
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }
}

module.exports = new TarefaController();
