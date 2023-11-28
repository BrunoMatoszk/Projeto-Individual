use rocketLeague;

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
                ON a.fkPlayer = u.idUsuario; -- mostra as avaliações e o usuário
                
                
        
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
        WHERE u.idUsuario = 1; -- mostra avaliação de um determinado usuário
        
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
    
    select * from usuario;
		
            