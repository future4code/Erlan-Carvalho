import { connection } from "../data/connection";

// This function gets the User info into the data base by the user email 

export const getUserInfo = async (email: string): Promise<any> => {
    const result = await connection("cookenuUser")
        .select("*")
        .where({ email })

    return result[0]
}