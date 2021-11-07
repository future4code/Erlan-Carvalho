import { connection } from "../connection";

export const selectPokemonsByName = async (Name: string) => {
    const result = await connection().
        select("*").
        from("red_fox_pokemon").
        where(`${Name}`)

    return result[0];
}