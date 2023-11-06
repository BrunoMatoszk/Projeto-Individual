var database = require("../database/config");

function listar() {
    console.log("ACESSEI A AVALIACAO JOGADOR  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select a.idAvaliacao, a.descricao, u.idUsuario, u.nome, u.sobrenome, u.email, u.senha, a.fkPlayer, 
    j.nome as NomeJogador 
    from avaliacao a join jogador j
    on fkPlayer = idJogador join usuario u on a.fkUser = u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI A AVALIACAO JOGADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
    SELECT 
    a.idAvaliacao,
    a.descricao,
    a.fkPlayer,
    u.idUsuario,
    u.nome,
    u.sobrenome,
    u.email,
    u.senha
FROM avaliacao a
    INNER JOIN usuario u
        ON a.fkPlayer = u.idUsuario
WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI A AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    SELECT 
    a.idAvaliacao,
    a.descricao,
    a.fkPlayer,
    u.idUsuario,
    u.nome,
    u.sobrenome,
    u.email,
    u.senha
FROM avaliacao a
    INNER JOIN usuario u
        ON a.fkPlayer = u.idUsuario
WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarJogadorPorUsuario(idUsuario) {
    console.log("ACESSEI A AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    select idUsuario, usuario.nome, usuario.fkJogador, jogador.nome as NomeJogador from usuario join jogador
    on fkJogador = idJogador
        where idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function publicar(idUsuario, idJogador, descricao) {
    console.log("ACESSEI A AVALIACAO JOGADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, idJogador, descricao);
    var instrucao = `
        INSERT INTO avaliacao (fkUser, fkPlayer, descricao) VALUES (${idUsuario}, ${idJogador}, '${descricao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarJogador(idUsuario, jogadorEscolhido) {
    console.log("ACESSEI A AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, jogadorEscolhido);
    var instrucao = `
        update usuario set fkJogador = ${jogadorEscolhido} where idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novaDescricao, novoJogador, idAvaliacao) {
    console.log("ACESSEI A AVALIACAO JOGADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, novoJogador, idAvaliacao);
    var instrucao = `
    UPDATE avaliacao SET descricao = '${novaDescricao}', fkPlayer = '${novoJogador}' WHERE idAvaliacao = ${idAvaliacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idAvaliacao) {
    console.log("ACESSEI A AVALIACAO JOGADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAvaliacao);
    var instrucao = `
        DELETE FROM avaliacao WHERE idAvaliacao = ${idAvaliacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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
