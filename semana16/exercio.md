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

# ------------------------------------------------------------------------------------------------------------------------------------------------------

## 2.

### a. const updateActorSalary = async(
###     id:string,
###     salary:number,
### ):Promise<void>=>{
###     await connection("Actor")
###     .update({
###         salary:salary,
###     }).where
###       ( "id",id);
### };

### b. const deleteActor = async (
###       id:string,
###   ):Promise<void> =>{
###       await connection("Actor")
###       .delete()
###       .where("id",id)
###   }

### c.  const avarageSalaryByGender = async(
###    gender:string, salary:number,):Promise<any>=>{
###       const result = await connection("Actor")
###        .select()
###        .avg("SSAalary as avarage")
###        .where({gender})
###
###        return result [0].avarage
###    }

# ------------------------------------------------------------------------------------------------------------------------------------------------------



 


