# Exercício 

## 1.

### a. A resposta que obtemos utilizando o raw como o próprio nome diz, obtemos os dados do banco de forma "crua" e por isso devemos tartar a resposta para trazer apenas o que qeueremso que são os dados dos stores com base no id (nesse caso id - 001).

### b. const getActorByName =  async (name: string): Promise<any>=>{
###     const result = await connection.raw(`
###     SELECT * FROM Actor WHERE name = '${name}'`)
###     return result [0][0]
### }

### c.  const getActorByGender = async (gender:string):Promise<any>=>{
###     const result = await connection.raw(`
###     SELECT COUNT * FROM Actor WHERE gender = '${gender}'`)
###     const count = result[0][0].count;
###   return count;
### }



