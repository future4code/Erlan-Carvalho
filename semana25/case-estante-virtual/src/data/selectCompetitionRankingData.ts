import { connection } from "./dbConnections/connection";

export const selectCompetitionRankingData = async () => {
    const result = await connection.raw(`
        SELECT atleta FROM estanteCompeticoes ORDER BY value DESC;  
`)
    return result[0];
}