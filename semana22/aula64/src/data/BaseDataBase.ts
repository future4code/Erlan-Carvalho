import knex from "knex";
import dotenv from "dotenv";

dotenv.config();



// abstract para evitar instanciar a BaseDatabase
// protected para permitir herança
// static para não precisar do .this

// export default abstract class BaseDataBase {
//     protected static connection = knex({
//         client:"mysql",
//         connection:
//         {
//             host:process.env.DB_HOST,
//             port:Number(process.env.PORT || "3306"),
//             user:process.env.DB_USER,
//             password:process.env.DB_PASS,
//             database:process.env.DB_NAME,
//             multipleStatements:true

//         }
//     })
// }

export const connection = knex({
    client: "mysql",
    connection:
    {
        host: process.env.DB_HOST,
        port: Number(process.env.PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        multipleStatements: true
    }
})