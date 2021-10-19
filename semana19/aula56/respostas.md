# Execícios sobre criptografia e user roles 

## 1.

### a) R - rounds é o número que é utilizado para determinar o tempo que será entregue o hash, deve ter um número perfeito(o recomendado é 12) para que a aplicação nem seja tão demorada nem tão rápida para que ataques brutos(onde os atacantes, tentam infinitas combinações), não venham ter facilidade e sucesso. Salt é parte da string criptografada(hash) que possui 3 partes 1ª- é o algorithimo que podem assumir valores como $2$  $2y$, entre outros, 2ª - é o cost que é o valor que determina a  quantidade do tempo que o ciclo do algoritimo se completará (a lib bcrypt chama cost de rounds(que é o que citei anteriormente) ) e 3ª é uma string aleatória.
