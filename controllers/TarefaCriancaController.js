var database = require("../database/connection");

class TarefaController {
    gravarTarefaCrianca(req, res) {
        let { idCrianca, idTarefa } = req.params;
        let { pontuacao } = req.body;

        database("tarefaCrianca")
            .insert({ idCrianca, idTarefa, pontuacao })
            .then((data) => {
                res.json({ message: "TarefaCriança criada com sucesso." });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    consultarTarefas(req, res) {
        database("tarefaCrianca")
            .select()
            .then((tarefas) => {
                res.json(tarefas);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }

    consultarTarefaPorCrianca(req, res) {
        let { id } = req.params;
        database("tarefaCrianca")
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

        database("tarefaCrianca")
            .where({ idTarefa: id })
            .update({
                nome: nome,
                descricao: descricao,
                pontuacaoBase: pontuacaoBase,
            })
            .then((data) => {
                res.json({ message: "TarefaCrianca atualizada com sucesso." });
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
                res.json({ message: "TarefaCrianca removida com sucesso." });
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }
}

module.exports = new TarefaController();
