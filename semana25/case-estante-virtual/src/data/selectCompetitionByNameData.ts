import { connection } from "./dbConnections/connection";

export const selectCompetitionByNameData = async (competicao: string) => {
    const result = await connection.raw(`SELECT * FROM estanteCompeticoes WHERE competicao = "${competicao}"`)

    return result[0]

}