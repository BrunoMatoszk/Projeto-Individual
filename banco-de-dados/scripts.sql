SELECT * FROM rocketleague.avaliacao;

select jogador.nome as NomeJogador, COUNT(fkPlayer) as TotalJogador 
from avaliacao 
join jogador ON fkPlayer = idJogador
group by jogador.nome 
order by TotalJogador desc; -- total de avaliacoes por jogador
            
              select jogador.nome as NomeJogador, count(fkJogador) as TotalVotos from usuario join jogador
                on fkJogador = idJogador
                    group by jogador.nome order by TotalVotos desc; -- total de votos por jogador
            
            
            insert into usuario values (null, "junior", "da silva", "junior@gmail.com", "junior123", 1),
            (null, "eduardo", "castrillo", "eduardo@gmail.com", "edu123", 2),
            (null, "jose", "vitor", "jose@gmail.com", "jose123", 3),
            (null, "vitor", "hugo", "vitor@gmail.com", "vitor123", 4),
            (null, "karen", "almeida", "karen@gmail.com", "karen123", 5),
            (null, "isabella", "porfirio", "isabella@gmail.com", "isab123", 6),
            (null, "roberta", "nogueira", "roberta@gmail.com", "roberta123", 7),
            (null, "matheus", "rabello", "matheus@gmail.com", "matheus123", 8),
            (null, "gustavo", "pardinho", "gustavo@gmail.com", "gustavo123", 9),
            (null, "marcela", "alves", "marcela@gmail.com", "marcela123", 10),
            (null, "betina", "rodrigues", "betina@gmail.com", "betina123", 2),
            (null, "claudio", "frizzarini", "claudio@gmail.com", "frizza123", 3),
            (null, "marise", "miranda", "marise@gmail.com", "marise123", 4);
            
            insert into avaliacao values (null, "joga facil",1, 2),
            (null, "melhor da season",2, 3),
            (null, "jogou nada",3, 4),
            (null, "o melhor",4, 5),
            (null, "goat",5, 6),
            (null, "vem pra bds",6, 7),
            (null, "muito ruim",7, 8),
            (null, "mvp ofensivo",8, 9),
            (null, "o rei",10, 10),
            (null, "bom demais",2, 11);