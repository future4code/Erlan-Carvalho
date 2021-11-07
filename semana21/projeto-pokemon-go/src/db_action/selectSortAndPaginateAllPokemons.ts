import { connection } from "../connection";

export const selectSortAndPaginateAllPokemons = async (Name: string, page: string) => {
    const result = await connection.raw
     (`
         SELECT * FROM red_fox_pokemon
         WHERE Name LIKE "%${Name}%"
         ORDER BY Name ASC
         LIMIT "%${page}%" ;
    `)
}