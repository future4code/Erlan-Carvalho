import { connection } from "../data/BaseDataBase";

export const getProfileByiD = async (id: string) => {
    const result = await connection("userTable").select("*").where({ id })
    return result
}


