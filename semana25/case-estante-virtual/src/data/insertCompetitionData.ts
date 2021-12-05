import { connection } from "./dbConnections/connection";

export const insertCompetitionData = async (id:string,competicao: string, atleta: string, value: number, unidade: string) => {
    await connection()
        .insert
        ({
            id,
            competicao,
            atleta,
            value,
            unidade
        })
        .into("estanteCompeticoes")

}