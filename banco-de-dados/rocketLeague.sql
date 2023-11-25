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



                
                
	