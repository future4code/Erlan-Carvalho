import knex from "knex"

// respostas dfa letra c) 


export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3006,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }

})

const userTableName = "toDoListUser";


const createUser = async (id: string, email: string, password: string) => {
    await connection
        .insert({
            id,
            email,
            password,
        })
        .into(userTableName);
}
