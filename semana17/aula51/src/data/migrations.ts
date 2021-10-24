import { connection } from "./connection";

//Exercício 2

const printError = (error:any) =>[
    console.log(error.sqlMessage || error.message)
]
export const createTable = () => connection.raw(
    `CREATE TABLE IF NOT EXISTS userAddress
    (
        id VARCHAR(255) PRIMARY KEY,
        logradouro TEXT NOT NULL,
        numero NUMBER NOT NULL,
        complemento TEXT NULL, 
        bairro VARCHAR(255) NOT NULL,
        cidade VARCHAR(255) NOT NULL,
        estado VARCHAR(255) NOT NULL
    );
`)
.then(()=>{console.log("tabelas criadas ")})
.catch(()=>{
    printError
})