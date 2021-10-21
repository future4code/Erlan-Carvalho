import { connection } from "../data/connection";

// register userInfo Into The DataBase
export const registerUser = async (id:string, userName: string, email: string, userPassword: string) => {
    await connection
        .insert(
            {
                id,
                userName,
                email,
                userPassword
            })
        .into("cookenuUser")
}