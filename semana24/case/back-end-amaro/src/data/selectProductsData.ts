import { connection } from "./dbConnection/connection";


export const selectProductsDataByNameOrId = async (id: string, name: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM  productConsultAmaro WHERE id =  "${id}" OR name = "${name}";`)
    return result[0];
}

