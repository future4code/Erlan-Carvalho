# Ecercício sobre aprofundameno me MySQL

## 1 .

### a. Se esse comando (ALTER TABLE Actor DROP COLUMN salary;) fosse rodado a coluna "salary" seria deletada.

### b. Se esse comando(ALTER TABLE Actor CHANGE gender sex VARCHAR(6);) osse rodad ele alteraria o nome da coluna "gender" para "sex" e faria com que a mesma agora pudesse ser nula(NULL).

### c. Se esse comando(ALTER TABLE Actor CHANGE gender gender VARCHAR(255);) fosse rodado, ele alteraria a capaidade que o tipo "VARCHAR" aceitaria, que está como 6 e passaria a ser 255.

### d. ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# ----------------------------------------------------------------------------------------------------------------------------------------------------

## 2.

### a. 
### UPDATE Actor 
### SET name = "Camila Pitanga", birth_date = "1977-06-14"
### Where id = "003";

 ### b. 
### UPDATE Actor 
### SET name = "JULIANA PAES" 
### WHERE name = "Juliana Paes";
### 
### UPDATE Actor 
### SET name = "Juliana Paes"
### WHERE name = "JULIANA PAES";

### c. UPDATE Actor
### SET name = "Leandra Leal", salary = 320000 , birth_date = "1982-09-08", 
### gender = "female"
### WHERE id = "005";

### d. query criada - UPDATE Actor 
### SET name = "Antônio Fagundes"
### WHERE id = "013";
### Resposta do MySQL - Query executed sucsessfully. No resulst. 0 rows affected. -- Query executada com sucesso. Sem resultados. 0 linhas affetadas. Ou seja, a query foi lida e comreendida pelo MySQL, porém pelo fato de não exitir tal id, ela nos retorna essa mensgame nos falando que a query foi executada com sucesso mas não houve nenhum resultado e nenhuma linha foi afetada.

# ----------------------------------------------------------------------------------------------------------------------------------------------------

## 3.

### a. DELETE FROM Actor WHERE name = "Fernanda Montinegro";

### b. DELETE FROM Actor WHERE gender = "male" AND   salary > 1000000; 

# ----------------------------------------------------------------------------------------------------------------------------------------------------

## 4.

### a. SELECT MAX(salary) FROM Actor;

### b. SELECT MIN(salary) FROM Actor WHERE gender = "female";

### c. SELECT COUNT(*) FROM Actor WHERE gender = "female";

### d. SELECT SUM(salary) FROM Actor; 

# ----------------------------------------------------------------------------------------------------------------------------------------------------


## 5.

### a. Essa utlima query utiliza o modificador GROUP BY que por sua vez aglutina items de uma coluna em relação a outra, e na situação da query, a quantidade de atores atrizes foram agrupadas de acordo com o gênero.

### b. SELECT SUM(salary) FROM Actor; 

### c. SELECT * FROM Actor ORDER BY salary DESC;

### d. SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

### e. SELECT AVG(salary),gender FROM Actor GROUP BY gender;

# ----------------------------------------------------------------------------------------------------------------------------------------------------

## 6.

### a. ALTER TABLE Movies ADD playing_limit_date DATE;

### b. ALTER TABLE Movies CHANGE rating rating float;

### c. UPDATE Movies
### SET playing_limit_date = "Em Cartaz"
### WHERE name = "Se Eu Fosse Você";
### 
### UPDATE Movies 
### SET playing_limit_date = "Fora de Cartaz"
### WHERE name = "Doce De mãe";

### d. DELETE FROM Movies WHERE id = "003";
### Resposta do MySQL - Query executed sucsessfully. No resulst. 0 rows affected. -- Query executada com sucesso. Sem resultados. 0 linhas affetadas. Ou seja, a query foi lida e comreendida pelo MySQL, porém pelo fato de não exitir tal id, ela nos retorna essa mensgame nos falando que a query foi executada com sucesso mas não houve nenhum resultado e nenhuma linha foi afetada.

# ----------------------------------------------------------------------------------------------------------------------------------------------------
## 7.

### a. SELECT COUNT (*) FROM Movies WHERE playing_limit_date = "Em Cartaz "AND  rating > 7.5;

### b. SELECT AVG(rating) FROM Movies; 

### c. SELECT COUNT(*) FROM Movies WHERE playing_limit_date = "Em Cartaz";

### d. SELECT COUNT (*) FROM Movies WHERE playing_limit_date = "Irá lançar"; 

### e. SELECT MAX(rating) FROM Movies;

### f. SELECT MIN(rating) FROM Movies;

# ----------------------------------------------------------------------------------------------------------------------------------------------------

## 8.

### a. SELECT (*) FROM Movies ORDER BY name ASC;

### b. SELECT (*) FROM Movies ORDER BY name ASC LIMIT 5;

### c. SELECT * FROM Movies Where playing_limit_date = "Em Cartaz" LIMIT 3; 

### d.  SELECT * FROM Movies  ORDER BY rating DESC LIMIT 3; 
# ----------------------------------------------------------------------------------------------------------------------------------------------------


