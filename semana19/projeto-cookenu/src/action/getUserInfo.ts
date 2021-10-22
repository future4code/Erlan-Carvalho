import { connection } from "../data/connection";

export const getUserInfo = async (email: string) => {
    const result = await connection("cookenuUser")
        .select("*")
        .where({ email })

    return result[0]
}