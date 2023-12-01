-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE rocketLeague;

USE rocketLeague;

create table jogador(
idJogador int primary key auto_increment,
nome varchar(45)
);

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(15),
sobrenome varchar(15),
email varchar(30),
senha varchar(50),
fkJogador int, constraint fkJogador foreign key (fkJogador) references jogador(idJogador)
);

create table pontuacaoQuiz (
idPontuacao int auto_increment,
acertos int,
pontuacao int,
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario(idUsuario),
constraint pkComposta primary key (idPontuacao, fkUsuario)
);

create table avaliacao(
idAvaliacao int auto_increment,
descricao varchar(1000),
fkPlayer int, constraint fkPlayer foreign key (fkPlayer) references jogador(idJogador),
fkUser int, constraint fkUser foreign key (fkUser) references usuario(idUsuario),
constraint pkTripla primary key(idAvaliacao, fkUser, fkPlayer)
);


insert into jogador values
	(null, 'Zen'),
	(null, 'Acronik'),
	(null, 'Alpha'),
	(null, 'Firstkiller'),
	(null, 'Vatira'),
	(null, 'Radosin'),
    (null, 'Jack'),
    (null, 'Moonkey Moon'),
    (null, 'Rise'),
    (null, 'Rw9');
/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

  
        create view votoDoUsuario as
         select idUsuario, usuario.nome, usuario.fkJogador, jogador.nome as NomeJogador from usuario join jogador
            on fkJogador = idJogador
                where idUsuario = 1; -- mostra o jogador que o usuário votou
                
                
                
    create view totalAvaliacoesJogador as
    select jogador.nome as NomeJogador, COUNT(fkPlayer) as TotalJogador from avaliacao 
        join jogador ON fkPlayer = idJogador group by jogador.nome 
        order by TotalJogador desc; -- conta o total de avaliações por jogador
        
        
        create view totalVotosJogador as
        select jogador.nome as NomeJogador, count(fkJogador) as TotalVotos from usuario join jogador
        on fkJogador = idJogador
            group by jogador.nome order by TotalVotos desc; -- conta o total de votos por jogador
            
            
        create view avaliacoesDeUmUsuario as
        select a.idAvaliacao, a.descricao, u.idUsuario, u.nome, u.sobrenome, u.email, u.senha, a.fkPlayer, 
    j.nome as NomeJogador 
    from avaliacao a join jogador j
    on fkPlayer = idJogador join usuario u on a.fkUser = u.idUsuario where u.idUsuario = 1; -- mostra as avaliações de um usuário com nome do jogador
    
    
    
    create view avaliacoesComNomeJogador as 
    select a.idAvaliacao, a.descricao, u.idUsuario, u.nome, u.sobrenome, u.email, u.senha, a.fkPlayer, 
    j.nome as NomeJogador 
    from avaliacao a join jogador j
    on fkPlayer = idJogador join usuario u on a.fkUser = u.idUsuario; -- mostra as avaliações com nome do jogador
    
    
		
	create view rankingQuiz as select 
    u.nome as 'Usuário',
    p.acertos 'Acertos',
    p.pontuacao as 'Pontuação',
    j.nome as 'Jogador'
    from pontuacaoquiz as p join usuario as u
	on fkUsuario = idUsuario
    join jogador as j on idJogador = fkJogador order by pontuacao desc; -- ranking do quiz
