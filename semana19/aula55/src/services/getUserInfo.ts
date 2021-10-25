import { connection } from "../data/connection";

export const getUserInfo = async (email: string): Promise<any> => {
    const result = await connection(`toDoListUser`)
        .select("*")
        .where({ email })
    return result[0]
}

