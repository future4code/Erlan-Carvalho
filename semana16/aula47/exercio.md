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

## 3.
 
### a.  app.get("/actor/:id", async (req: Request, res: Response) => {
###     try {
###         const id = req.params.id
###         const actor = await getActorById(id);
### 
###         res.status(200).send(actor)
### 
###     } catch (error: any) {
###         res.status(400).send({ message: error.message })
### 
###     }
### })


### b. app.get("/actor/", async (req: Request, res: Response) => {

###     try {
###         const actorQauntityByGender = await getActorByGender(req.query.### gender as string);
### 
###         res.status(200).send({ quantity: actorQauntityByGender, });
### 
###     } catch (error: any) {
###         res.status(400).send({ message: error.message })
###     }
### 
### })

# ------------------------------------------------------------------------------------------------------------------------------------------------------

## 4. 

### a. app.put("/actor", async (req: Request, res: Response) => {
###     try {
###         const updateSalary = await updateActorSalary(
###             req.body.id,
###             req.body.salary,
###         )
###         res.status(200).send("Alteração feita com sucesso")
### 
###     } catch (error: any) {
###         res.status(400).send({ message: error.mmessage })
###     }
### }) 
 
### b. 
### app.delete("/actor/:id", async (req: Request, res: Response) => {
### 
###     try {
###         
###         await deleteActor(
###             req.params.id
###         )
###         res.status(200).send("Ator deletado com sucesso")
### 
### 
###     } catch (error: any) {
###         res.status(400).send({ message: error.message })
### 
###     }
### 
### })



 


