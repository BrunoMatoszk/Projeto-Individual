var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        select jogador.nome as NomeJogador, COUNT(fkPlayer) as TotalJogador from avaliacao 
        join jogador ON fkPlayer = idJogador group by jogador.nome 
        order by TotalJogador desc;
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select jogador.nome as NomeJogador, COUNT(fkPlayer) as TotalJogador from avaliacao 
        join jogador ON fkPlayer = idJogador group by jogador.nome 
        order by TotalJogador desc;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        select jogador.nome as NomeJogador, COUNT(fkPlayer) as TotalJogador from avaliacao 
        join jogador ON fkPlayer = idJogador group by jogador.nome 
        order by TotalJogador desc;
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select jogador.nome as NomeJogador, COUNT(fkPlayer) as TotalJogador from avaliacao 
        join jogador ON fkPlayer = idJogador group by jogador.nome 
        order by TotalJogador desc;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function jogador(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        select jogador.nome as NomeJogador, count(fkJogador) as TotalVotos from usuario join jogador
        on fkJogador = idJogador
            group by jogador.nome order by TotalVotos desc;
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select jogador.nome as NomeJogador, count(fkJogador) as TotalVotos from usuario join jogador
        on fkJogador = idJogador
            group by jogador.nome order by TotalVotos desc;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    jogador
}