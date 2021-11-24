import { connection } from "../../data/dbConnection/connection";

export const createTables = () =>
    connection.raw(`
    CREATE TABLE IF NOT EXISTS productConsultAmaro(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL, 
        productTag VARCHAR(255) NOT NULL,
        FOREIGN KEY (productTag) REFERENCES productsTags(id)
    );
    CREATE TABLE IF NOT EXISTS productsTags(
        id  VARCHAR(255) PRIMARY KEY,
        tag VARCHAR(255) NOT NULL
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

