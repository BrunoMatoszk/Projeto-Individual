var express = require("express");
var router = express.Router();

var avaliacaoModel = require("../controllers/avaliacaoController");

router.get("/listar", function (req, res) {
    avaliacaoModel.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avaliacaoModel.listarPorUsuario(req, res);
});

router.get("/listarJogador/:idUsuario", function (req, res) {
    avaliacaoModel.listarJogadorPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avaliacaoModel.pesquisarDescricao(req, res);
});

router.post("/cadastrarJogador/:idUsuario", function (req, res) {
    avaliacaoModel.cadastrarJogador(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avaliacaoModel.publicar(req, res);
});

router.put("/editar/:idAvaliacao", function (req, res) {
    avaliacaoModel.editar(req, res);
});

router.delete("/deletar/:idAvaliacao", function (req, res) {
    avaliacaoModel.deletar(req, res);
});

module.exports = router;