var database = require("../database/config");

function publicar(acertos, pontuacao, fkUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", acertos, pontuacao, fkUsuario);
    var instrucao = `
        insert into pontuacaoquiz(acertos, pontuacao, fkUsuario) values (${acertos}, ${pontuacao}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function consultar(idUsuario) {
    instrucaoSql = `
        select * from pontuacaoquiz where fkUsuario = ${idUsuario};`
        ;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaPontuacao, novaQtdAcertos, fkUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaPontuacao, novaQtdAcertos, fkUsuario);
    var instrucao = `
        update pontuacaoquiz set acertos = ${novaQtdAcertos}, pontuacao = ${novaPontuacao} where fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ranking() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ",);
    var instrucao = `
    select 
    u.nome as 'Usuário',
    p.acertos 'Acertos',
    p.pontuacao as 'Pontuação',
    j.nome as 'Jogador'
    from pontuacaoquiz as p join usuario as u
	on fkUsuario = idUsuario
    join jogador as j on idJogador = fkJogador;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    publicar,
    consultar,
    editar,
    ranking
}
