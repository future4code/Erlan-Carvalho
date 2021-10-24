import { connection } from "./connection";
import users from './users.json';
//Exercício 2

const printError = (error:any) =>[
    console.log(error.sqlMessage || error.message)
]
export const createTables = () => connection.raw(
    `
    CREATE TABLE IF NOT EXISTS aula51_users
    (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        nickname VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        address VARCHAR(255) NOT NULL
    );
`)
.then(()=>{console.log("tabelas criadas ")})
.catch(()=>{
    printError
})
const insertUsers = () => connection("aula51_users")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection)