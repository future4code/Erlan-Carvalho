import { connection } from "./dbConnections/connection";

export const selectAllCompetitionsData = async () => {
    const result = await connection("estanteCompeticoes").
        select("*")

    return result
}