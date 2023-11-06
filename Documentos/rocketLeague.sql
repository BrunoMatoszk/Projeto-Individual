CREATE DATABASE rocketLeague;

USE rocketLeague;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(15),
sobrenome varchar(15),
email varchar(30),
senha varchar(10),
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

create table jogador(
idJogador int primary key auto_increment,
nome varchar(45)
);

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
                ON a.fkPlayer = u.idUsuario;
                
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
        WHERE u.idUsuario = 1;
        
         select idUsuario, usuario.nome, usuario.fkJogador, jogador.nome as NomeJogador from usuario join jogador
            on fkJogador = idJogador
                where idUsuario = 1;
                
                
	