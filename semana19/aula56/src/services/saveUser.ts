import { connection } from "../data/connection";
import { roles } from "../types/authenticationData";


const userTableName = "toDoListUser";


export const createUser = async (id: string, email: string, password: string, user_Role:roles) => {
    await connection
        .insert({
            id,
            email,
            password,
            user_Role
        })
        .into(userTableName);
}