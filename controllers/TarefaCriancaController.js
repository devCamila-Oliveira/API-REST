var database = require("../database/connection");

class TarefaCriancaController {
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

    listarTarefasPorCrianca(req, res) {
        let { idCrianca } = req.params;
        database("tarefaCrianca")
            .where({ idTarefa: idCrianca })
            .select()
            .innerJoin("tarefa", "tarefaCrianca.idTarefa", "tarefa.idTarefa")
            .innerJoin(
                "crianca",
                "tarefaCrianca.idCrianca",
                "crianca.idCrianca"
            )
            .then((tarefaCrianca) => {
                res.json(tarefaCrianca);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }

    atualizarTarefaCrianca(req, res) {
        let { idTarefaCrianca } = req.params;
        let { idCrianca, pontuacao } = req.body;

        database("tarefaCrianca")
            .where({ idTarefaCrianca: idTarefaCrianca })
            .update({
                pontuacao: pontuacao,
                idCrianca: idCrianca,
            })
            .then((data) => {
                res.json({ message: "TarefaCrianca atualizada com sucesso." });
            })
            .catch((err) => {
                res.json(err);
            });
    }

    exbirTarefaCrianca(req, res) {
        let { idTarefaCrianca } = req.params;

        database("tarefaCrianca")
            .select()
            .innerJoin("tarefa", "tarefaCrianca.idTarefa", "tarefa.idTarefa")
            .innerJoin(
                "crianca",
                "tarefaCrianca.idCrianca",
                "crianca.idCrianca"
            )
            .where({ idTarefaCrianca: idTarefaCrianca }).then(tarefaCrianca => {
                res.json(tarefaCrianca)
            }).catch(err=>{
                console.error(err)
                res.status(400).json(err)
            });
    }

    removerTarefaCrianca(req, res) {
        let { idTarefaCrianca } = req.params;

        database("tarefaCrianca")
            .where({ idTarefaCrianca: idTarefaCrianca })
            .del()
            .then((data) => {
                res.json({ message: "TarefaCrianca removida com sucesso." });
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }
}

module.exports = new TarefaCriancaController();
