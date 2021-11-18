import { connection } from "./connection";

export const createTable = () => connection.raw(`
CREATE TABLE IF NOT EXISTS informationTable(
id VACRCHAR(255) PRIMARY KEY,
firstName VARCHAR(255) NOT NULL,
lastName VACRHAR(255) NOT NULL,
participation decimal() NOT NULL
);`)

createTable().
    then(() => { console.log("Tabela criada") }).
    catch((error) => { console.log(error.message || error.sqlMessage) }).
    finally(() => { console.log(connection.destroy()) })