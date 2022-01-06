import { connection } from "./connection";

export const createTables = () =>
    connection.raw(`
    CREATE TABLE IF NOT EXISTS estanteCompeticoes(
        id VARCHAR(255) PRIMARY KEY,
        competicao VARCHAR(255) NOT NULL,
        atleta VARCHAR(255) NOT NULL,
        value INT NOT NULL,
        unidade VARCHAR(255) NOT NULL
    ); `)


createTables().then(() => {
    console.log("Tabelas Criadas")
}).catch((error: any) => {
    console.log(error.message || error.sqlMessage)

}).
    finally(() => {
        connection.destroy()
    })