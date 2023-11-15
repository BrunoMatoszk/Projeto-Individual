var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAvaliacao", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAvaliacao", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/jogador/:idUsuario", function (req, res) {
    medidaController.jogador(req, res);
})


module.exports = router;