import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection:
    {
        host: process.env.DB_HOST,
        port: Number(process.env.PORT || "3306"),
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
})