var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");


router.post("/publicar/:idUsuario", function (req, res) {
    quizController.publicar(req, res);
});

router.get("/consultar/:idUsuario", function (req, res) {
    quizController.consultar(req, res);
});

router.put("/editar/:idUsuario", function (req, res) {
    quizController.editar(req, res);
});

module.exports = router;