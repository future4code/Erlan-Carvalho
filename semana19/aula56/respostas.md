# Execícios sobre criptografia e user roles 

## 1.

### a) R - rounds é o número que é utilizado para determinar o tempo que será entregue o hash, deve ter um número perfeito(o recomendado é 12) para que a aplicação nem seja tão demorada nem tão rápida para que ataques brutos(onde os atacantes, tentam infinitas combinações), não venham ter facilidade e sucesso. Salt é parte da string criptografada(hash) que possui 3 partes 1ª- é o algorithimo que podem assumir valores como $2$  $2y$, entre outros, 2ª - é o cost que é o valor que determina a  quantidade do tempo que o ciclo do algoritimo se completará (a lib bcrypt chama cost de rounds(que é o que citei anteriormente) ) e 3ª é uma string aleatória.


## 2.

### a) R - Para realizar os testes corretamente é necessário refatorar primeiramente o endpoint de cadastro, tendo em vista que é lá que está a função que vai inserir a senha criptografada do usuário no banco de dados.

### d) R - Não pois esse endpoint não exige nenhuma informação sensível para se acessar, e a garantia para se poder acessar esse endpoint é que o usuário tenha a sua senha poi só entrando na sua conta ele vai ter acesso ao token que é gerado ao fazer um cadastro e um login, token este que é necessário(colocando no headers) para fazer o endpoint de pegar os dados do usuários.

## 3.

### a) R - ALTER TABLE toDoListUser
### ADD user_Role ENUM ("normal", "admin") DEFAULT "normal"; 
 