import { connection } from "../data/connection";

export const getUserInfoById = async (id: string): Promise<any> => {
    const result = await connection("cookenuUser")
        .select("id", "userName" , "email")
        .where({ id })

    return result[0]
}