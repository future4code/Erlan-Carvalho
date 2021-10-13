# Exercício sobre Relações em SQL 

## 1.

### a. R- FOREIGN KEYS indicam que a propriedade que foi atribuida esse tipo é uma chave estrangeira, podendo assim ser referenciada à outra tabela, que é estrangeira.

### b. R - 
#### CREATE TABLE Rating (
#### id VARCHAR(255) PRIMARY KEY,
#### comment TEXT NOT NULL,
#### rate FLOAT NOT NULL,
#### movie_id VARCHAR(255),
#### FOREIGN KEY (movie_id) REFERENCES Movies(id)
#### );

#### INSERT INTO Rating (id, comment, rate, movie_id)
#### VALUES(
#### "001",
#### "Bom filme, boa comédia ",
#### 7,
#### "001"
#### );
#### 
#### INSERT INTO Rating(id, comment, rate, movie_id)
#### VALUES(
#### "002",
#### "Filme de comédia, interessante.",
#### 6,
#### "002"
#### );
#### 
#### INSERT INTO Rating(id, comment, rate, movie_id)
#### VALUES(
#### "003",
#### "FIlme muito bom, com bastante ação",
#### 8,
#### "004"
#### );
#### 
#### INSERT INTO Rating(id, comment, rate, movie_id)
#### VALUES(
#### "004",
#### "FIlme para assitir com a família, bastante engraçado",
#### 7,
#### "005"
#### );

### c. R -
#### INSERT INTO Rating (id, comment, rate, movie_id)
#### VALUES(
#### "005",
#### "Filme não cadastrado",
#### 0,
#### "008"
#### );
#### Mensagem de erro devolvida foi a seguinte:
#### - Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails 

#### (`lovelace-2147276-erlan-carvalho`.`Rating`, CONSTRAINT `Rating_ibfk_1`
#### FOREIGN KEY 
#### (`movie_id`) REFERENCES `Movies` (`id`))

#### Esse resultado aconteceu pelo fato de não existir uma chave estrangeria com o valor que foi passado na query.

### d. R -  
#### ALTER TABLE Movies
#### DROP COLUMN rating;

### e. R- 
#### DELETE FROM Movies WHERE rating  = 8; 
#### Mensagem de erro devolvida foi a seguinte:
#### Error Code: 1054. Unknown column 'rating' in 'where clause'
#### Essa resposta foi devolvida pelo fato deu ter apagado a coluna de avaliação (rating), fazendo com que ao tentar apagar um filme que possua avaliação seja impossível, pois não exeiste mais coluna de avaliação.

# ------------------------------------------------------------------------------------------------------------------------------------------------------

## 2 . 

### a. R - Essa tabela representa a reçaão entre os atores e os filmes, possuindo duas colunas que são chaves estrangeiras que se relacionam com a tabela 'Actor' e a tabela 'Movies'.

### b. R - 
#### INSERT INTO MovieCast(movie_id, actor_id)
#### VALUES(
#### "001",
#### "001"
#### );
#### 
#### INSERT INTO MovieCast(movie_id, actor_id)
#### VALUES(
#### "001",
#### "002"
#### );
#### 
#### INSERT INTO MovieCast(movie_id, actor_id)
#### VALUES(
#### "002",
#### "008"
#### );
#### 
#### INSERT INTO MovieCast(movie_id, actor_id)
#### VALUES(
#### "004",
#### "009"
#### );
#### 
#### INSERT INTO MovieCast(movie_id, actor_id)
#### VALUES(
#### "005",
#### "007"
#### );
#### 
#### INSERT INTO MovieCast(movie_id, actor_id)
#### VALUES(
#### "004",
#### "001"
#### );
#### 
#### INSERT INTO MovieCast(movie_id, actor_id)
#### VALUES(
#### "002",
#### "001"
#### );

### c. R -  
#### INSERT INTO MovieCast(movie_id, actor_id)
#### VALUES(
#### "009",
#### "011"
#### );

#### Mensagem de erro devolvida :

#### Error Code: 1452. Cannot add or update a child row: a foreign key #### constraint fails (`lovelace-2147276-erlan-carvalho`.`MovieCast`,
#### CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES`Movies` 
#### (`id`))

#### Esse erro é devolvido pelo fato do MySQL procurar os ids passasdos na query da tabela MovieCats nas tabelas Movies e Actor e não encontar.


### d. R - Foi devoldivo um erro, que foi :
#### Error Code: 1451. Cannot delete or update a parent row: a 
#### foreign key constraint fails (`lovelace-2147276-erlan-carvalho`.
#### `MovieCast`, 
#### CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` 
#### (`id`))
#### Não foi possível deletar um ator que possui relação com outra tabela, justamente por esse fato. Por conta disso, ser uma linha pai, fez com que não fosse possível deletá-la.
# ------------------------------------------------------------------------------------------------------------------------------------------------------







