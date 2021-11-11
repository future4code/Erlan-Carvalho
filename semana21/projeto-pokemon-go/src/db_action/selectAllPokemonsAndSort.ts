import { connection } from "../connection";

export const selectAllPokemonsAndSort = async (Name: string) => {
    const result = await connection.raw
        (`
        SELECT * FROM red_fox_pokemon
        WHERE Name LIKE "%${Name}%"
        ORDER BY Name ASC ;
        `)
        return result;
}