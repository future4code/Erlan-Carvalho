import { connection } from "../../data/dbConnection/connection";

export const createTables = () =>
    connection.raw(`
    CREATE TABLE IF NOT EXISTS productConsultAmaro(
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL, 
        tags VARCHAR(255) NOT NULL
    );
     `)

createTables()
    .then(() => {
        console.log("Tabaleas Criadas")
    }).catch((error: any) => {
        console.log(error.message || error.sqlMessage)
    }).finally(() => {
        connection.destroy()
    })



