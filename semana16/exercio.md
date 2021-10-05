# Exercício sobre banco de dados e introdução ao MySQL

## 1.
### a) R -  Nessa query o comando é para criar uma tabela, e as instruçõoes dentro desse comando é para que se crie 5 colunas, uma chamada id que é uma chave primária ou PRIMARU KEY(PK), outra chamada nome que é será uma string com no máximo 255 caractéres além de ser NOT NULL, ou seja as colunas não podem estar vazias (nulas), outra coluna chamada salary que será do tipo FLOAT ou seja um número que não é inteiro, podendo possuir casas decimais, além de também ser NOT NULL, outra coluna chamada birth_date que é o do tipo DATE e também é NOT NULL, e por últtimo uma coluna chamda gender, que é do tipo string (VARCHAR) pondendo conter um máximo de 6 caracteres(VARCHAR(6)).

### b) R - O comando SHOW DATABASE mostra qual o nome da base de dados que estamos operando, e o comando SHOW TABLES, mostra as tabelas dessa base de dados.

### c) R - o Comando DESCRIBE <nome-da-tabela> mostra toda a estrutura dos dados dessa tabela. Informações como o tipo de cada coluna, seus dados e etc.

## -----------------------------------------------------------------------

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


### ----------------------------------------------------------------------
