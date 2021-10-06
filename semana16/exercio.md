# Exercício sobre banco de dados e introdução ao MySQL

## 1.
### a) R -  Nessa query o comando é para criar uma tabela, e as instruçõoes dentro desse comando é para que se crie 5 colunas, uma chamada id que é uma chave primária ou PRIMARU KEY(PK), outra chamada nome que é será uma string com no máximo 255 caractéres além de ser NOT NULL, ou seja as colunas não podem estar vazias (nulas), outra coluna chamada salary que será do tipo FLOAT ou seja um número que não é inteiro, podendo possuir casas decimais, além de também ser NOT NULL, outra coluna chamada birth_date que é o do tipo DATE e também é NOT NULL, e por últtimo uma coluna chamda gender, que é do tipo string (VARCHAR) pondendo conter um máximo de 6 caracteres(VARCHAR(6)).

### b) R - O comando SHOW DATABASE mostra qual o nome da base de dados que estamos operando, e o comando SHOW TABLES, mostra as tabelas dessa base de dados.

### c) R - o Comando DESCRIBE <nome-da-tabela> mostra toda a estrutura dos dados dessa tabela. Informações como o tipo de cada coluna, seus dados e etc.

# ------------------------------------------------------------------------

## 2.

### b) O erro que apareceu foi o seguinte: Duplicate entry '002' for key 'PRIMARY', quer dizer: entrada duplicadas '002' para chave ' PRIMÁRIA', ou seja, pelo fato da chave ser primária, ela deve ser única e não pode possuir a  dois ou mais items da mesma coluna (nesse caso id) na tabela.

#### c) Column count doesn't match count at row 1 - Contagem da coluna não corresponde a contagem da coluna 1 (que é a coluna de criação da tabela), ou seja, ele está falando que está faltando colocar o restante das colunas que são  birth_date e o gender. 

#### d) Field 'name' doesn't have a default value - Campo 'name' não tem um valor padrão, ou seja, pelo fato do campo 'name' estar omitido, e não possuir valor padrão  para ser, não possuir um valor como no exemplo, resulta nesse erro, portanto é necessário adcionar um nome para a tabela.

#### e) Incorrect date value : '1950' value for column 'birth_date' at row 1 -  valor de data incorreto : valor '1950' para coluna 'birth_date' na linha 1. Significa dizer que a forma que a data da coluna 'birth_date ' foi escrita de maneira incorreta. Ela veio sem aspas ("").

### Comandos corrigidos - 

### INSERT INTO Actor (id, name, salary, birth_date, gender)
### VALUES(
###   "003", 
###   "Fernanda Montenegro",
###   300000,
###   "1929-10-19", 
###   "female"
### );

### INSERT INTO Actor (id, name, salary, birth_date, gender)
### VALUES(
###   "004",
###   "Nicolas Cage",
###   400000,
###   "1949-04-18", 
###   "male"
### );

### INSERT INTO Actor (id, name, salary, birth_date, gender)
### VALUES(
###   "005", 
###   "Juliana Paes",
###   719333.33,
###   "1979-03-26", 
###   "female"
### );


### f) 
### INSERT INTO Actor (id, name, salary, birth_date, gender)
### VALUES(
### "006",
### "Ronaldo Nazário",
### 2000000,
### "1979-05-25",
### "male");
### 
### INSERT INTO Actor(id, name, salary, birth_date, gender)
### VALUES(
### "007",
###   "Regina Cazé",
###   800000,
###   "1950-08-20",
###   "female"
### );


## -----------------------------------------------------------------------

## 3.
### a. SELECT id, name, salary, birth_date, gender FROM Actor WHERE gender = "female"

### b. SELECT salary FROM Actor WHERE name = "Tony Ramos";

### c. SELECT id, name, salary, birth_date, gender FROM Actor WHERE gender = "invalid"; Resultado -- Query Executed Sucsessfully. No Results. 0 rows affected (Query executada com sucesso. Sem resultados, 0 linhas afetadas). Isso quer dizzer que o comando está correeto, mas pelo fato de nenhum valor chamado "invalid" ter sido inserido na tabela, ele retorna essa resposta. Falando que naão tem resultados e que nenhuma linha foi afetada.

### d. SELECT id, name, salary, birth_date, gender FROM Actor WHERE salary <= 500000

### e. unknown column 'nome' in field list - coluna desconhecida 'nome' na lista de campos, esse erro significa que o MySQL não reconhece coluna chamada'nome' na lista de campos, ou seja o erro é que em vez de estar 'name' como coluna está escrito 'nome', portanto para corrigir basta fazer essa alteração. SELECT id, name from Actor WHERE id = "002"

# ------------------------------------------------------------------------

## 4.

### a. A query citada utiliza comandos para que delimitam o resultado final final, que neste caso é pegar todas os items da tabela Actor que possuem nome(name) que começe com a letra "A" ou (OR) "J" e (AND) possua o salário(salary) maior (>) que 300000.

### b. SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

### c. SELECT * FROM Actor WHERE name LIKE "%G%" AND name LIKE "%g%";

### d.  
### SELECT * FROM Actor WHERE name LIKE "%A%" or name LIKE "%a%" OR name LIKE 
### "%G%" OR name LIKE "%g%" 
### AND salary BETWEEN 350000 AND 900000; 
### 

# ------------------------------------------------------------------------

## 5.
 
### a. 
### CREATE TABLE Movies (
###   id VARCHAR(255) PRIMARY KEY,
###   name VARCHAR (255) NOT NULL,
###   sinopse TEXT NOT NULL,
###   release_date DATE NOT NULL,
###   rating TINYINT NOT NULL
### );
### Essa query cria a tabela que possue colunas que são as informações sobre os filmes.(id, nome, sinopse, data de lançamento e avaliação).

### b.
### INSERT INTO Movies (id, name, sinopse, release_date, rating)
### VALUES(
### "001",
###   "Se Eu Fosse Você",
###   "Cláudio e Helena são casados há muitos anos e enfrentam a 
###   rotina do casamento. Um dia eles são atingidos por um fenômeno ### inexplicável e trocam de corpos",
###   "2006-01-06",
###   7
### );

### c. INSERT INTO Movies (id, name, sinopse, release_date, rating)
### VALUE(
### "002",
###   "Doce De Mãe",
###   "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes ### confusões. A vida dela e
###   dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
###   empregada e amiga de Dona Picucha, anuncia que vai se casar e não ### poderá mais morar com ela",
###   "2012-12-27",
###   10
### );

### d. INSERT INTO Movies (id, name, sinopse, release_date, rating)
### VALUES(
### "003",
###  "Dona Flor E seus Dois Maridos",
###   "Dona Flor é uma sedutora professora de culinária casada com Vadinho,
###   que só quer saber de farras e jogatina nas boates. 
###   A vida de abusos acaba por acarretar sua morte precoce.",
###   "2017-11-02",
###   8
### );

### e. 
### INSERT INTO Movies (id, name, sinopse, release_date, rating)
### VALUES(
### "004",
###   "Tropa De Elite",
###   "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado ### para chefiar 
###   uma das equipes que tem como missão apaziguar o Morro do Turano. Ele ### precisa cumprir
###   as ordens enquanto procura por um substituto para ficar em seu lugar. ### Em meio a
###   um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois ### aspirantes 
###   a oficiais da PM. Ansiosos para entrar em ação e impressionados com a 
###   eficiência de seus salvadores, os dois se candidatam ao curso de ### formação da Tropa de Elite.",
###   "2007-10-05",
###   10
### );

# ------------------------------------------------------------------------
