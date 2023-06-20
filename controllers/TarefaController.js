var database = require("../database/connection");

class TarefaController {
    gravarTarefa(req, res) {
        const { nome, descricao, pontuacao } = req.body;

        console.log(nome, descricao, pontuacao);

        database.insert({ nome, descricao, pontuacao })
            .table("tarefa")
            .then((data) => {
                console.log(data);
                res.json({ message: "Tarefa criada com sucesso!" });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = new TarefaController()