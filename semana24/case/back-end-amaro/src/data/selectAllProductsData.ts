import { connection } from "../data/dbConnection/connection";

export const selectAllProductsData = async () => {
    const result = await connection.raw(`SELECT id, name, tags FROM productConsultAmaro;`)
    return result[0]
}