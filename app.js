//Inicialização da aplicação
const express = require('express');
const app = express();

const User = require("./models/User")

const Criptografia = require("./criptografia")

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página inicial");
});

app.post("/cadastrar", async (req, res) => {

    await User.create(req.body)
    .then(() => {
        return res.json({
            //Falta retorta ID
           id: "Id",
            mensagem:"Usuário Cadastrado"
        });
    }).catch(() => {
        return res.status(400).json({
            //Completo
            code: "E_VALIDATION_FAILURE",
            mensagem: "O campo \"name\" é obrigatório"
        });
    });

    //res.send("Página cadastrar");
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});