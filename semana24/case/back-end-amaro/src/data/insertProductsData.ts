import { connection } from "./dbConnection/connection";

export const insertProductsData = async (id: string, name: string, tags: string) => {
    await connection("productConsultAmaro").insert({ id, name, tags })
}