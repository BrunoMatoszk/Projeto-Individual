var avaliacaoModel = require("../models/avaliacaoModel");

function listar(req, res) {
    avaliacaoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    avaliacaoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarJogadorPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    avaliacaoModel.listarJogadorPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarDescricao(req, res) {
    var descricao = req.params.descricao;

    avaliacaoModel.pesquisarDescricao(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var idUsuario = req.params.idUsuario;
    var idJogador = req.body.idJogador;
    var descricao = req.body.descricao;


    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está vazia!");
    } else if (descricao == "") {
        res.status(400).send("A descrição está indefinido!");
    } else if (idJogador == undefined) {
        res.status(400).send("O id do jogador está indefinido!");
    } else {
        avaliacaoModel.listarPorUsuario(idUsuario).then((resultado) => {
            if (resultado.length > 0) {
                res.status(400).send("O usuário já fez uma avaliação"); //mexer
            } else {
                avaliacaoModel.publicar(idUsuario, idJogador, descricao)
                    .then(
                        function (resultado) {
                            res.json(resultado);
                        }
                    )
                    .catch(
                        function (erro) {
                            console.log(erro);
                            console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                            res.status(500).json(erro.sqlMessage);
                        }
                    );
            }
        })

    }
}

function cadastrarJogador(req, res) {
    var idUsuario = req.params.idUsuario;
    var jogadorEscolhido = req.body.jogadorEscolhido;


    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
    } else if (jogadorEscolhido == 0) {
        res.status(400).send("jogador não foi escolhido");
    } else {
        avaliacaoModel.cadastrarJogador(idUsuario, jogadorEscolhido)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    var novaDescricao = req.body.descricao;
    var idAvaliacao = req.params.idAvaliacao;

    if (novaDescricao == undefined) {
        res.status(400).send("A descrição está indefinida!");
    } else if (novaDescricao == "") {
        res.status(400).send("A descrição está vazia!");
    } else {
        avaliacaoModel.editar(novaDescricao, idAvaliacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }



}

function deletar(req, res) {
    var idAvaliacao = req.params.idAvaliacao;

    avaliacaoModel.deletar(idAvaliacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    listarPorUsuario,
    listarJogadorPorUsuario,
    pesquisarDescricao,
    publicar,
    cadastrarJogador,
    editar,
    deletar
}