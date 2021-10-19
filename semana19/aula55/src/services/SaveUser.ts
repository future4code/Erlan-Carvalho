import { connection } from "../data/connection";

// respostas da 2ª letra c) 


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
