import { connection } from "../data/connection";

// This function gets the users information into the data base using the user id  

export const getUserInfoById = async (id: string): Promise<any> => {
    const result = await connection("cookenuUser")
        .select("id", "userName" , "email")
        .where({ id })

    return result[0]
}