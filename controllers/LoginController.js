var database = require("../database/connection");
var bcrypt = require("bcryptjs");

class LoginController {
    async insertUser(username, senha, cargo = 0) {
        const userExists = await database("usuario")
            .where("username", username)
            .first();

        if (userExists) {
            throw Error("Usuário já existe");
        }

        if(username == 'admin') cargo = 1;

        let senhaCripto = await bcrypt.hash(senha, 10);

        return await database("usuario")
            .insert({ username, senha: senhaCripto, cargo: cargo })
            .then((data) => {
                return data;
            });
    }
    async login(req, res) {
        let { username, senha } = req.body;

        const user = await database("usuario")
            .where("username", username)
            .select()
            .first();

        let result = await bcrypt.compare(senha, user.senha);

        console.log(result);
        res.json(result);
    }

    register = async (req, res) => {
        let { username, senha } = req.body;

        await this.insertUser(username, senha)
            .then((data) => {
                res.json({ message: "Usuário inserido com sucesso" });
            })
            .catch((err) => {
                console.error(err);
                res.status(400).json({ error: err.message });
            });
    }
}

module.exports = new LoginController();
