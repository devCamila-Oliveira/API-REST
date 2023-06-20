var database = require("../database/connection");
var LoginController = require("./LoginController");

class CriancaController {
    async gravarCrianca(req, res) {
        const { nome, dataNascimento, username, senha } = req.body;
        
        await LoginController.insertUser(username, senha)
            .then((data) => {
                console.log(data, typeof(data))
                database("crianca")
                    .insert({
                        nome,
                        dataNascimento,
                        idUsuario: data.toString(),
                    })
                    .then((data) => {
                        res.json({ message: "Criança inserida com sucesso." });
                    })
                    .catch((err) => {
                        console.error(err);
                        res.status(500).json({
                            error: "Erro ao inserir criança",
                        });
                    });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ error: "Erro ao inserir usuário" });
            });
    }

    consultarCriancas(req, res) {
        database("crianca")
            .select()
            .innerJoin("usuario", "crianca.idUsuario", "usuario.idUsuario")
            .then((criancas) => {
                res.json(criancas);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }

    consultarCrianca(req, res) {
        let { id } = req.params;
        database("crianca")
            .where({ idCrianca: id })
            .select()
            .innerJoin("usuario", "crianca.idUsuario", "usuario.idUsuario")
            .then((crianca) => {
                res.json(crianca);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }

    atualizarCrianca(req, res) {
        let { id } = req.params;
        let { nome, descricao, pontuacaoBase } = req.body;

        database("crianca")
            .where({ idCrianca: id })
            .update({
                nome: nome,
                descricao: descricao,
                pontuacaoBase: pontuacaoBase,
            })
            .then((data) => {
                res.json({ message: "Crianca atualizada com sucesso." });
            })
            .catch((err) => {
                res.json(err);
            });
    }

    removerCrianca(req, res) {
        let { id } = req.params;

        database("crianca")
            .where({ idCrianca: id })
            .del()
            .then((data) => {
                res.json({ message: "Crianca removida com sucesso." });
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }
}

module.exports = new CriancaController();
