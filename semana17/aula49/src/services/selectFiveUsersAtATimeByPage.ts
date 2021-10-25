import { connection } from "../data/connection"

export const selectFiveUsersAtATimeByPage = async (name:string,page: string) => {

    const result = await connection.raw(`
           SELECT id, name, email, type
           FROM aula49_exercicio
           WHERE ${name} LIKE %${name}%
           ORDER BY ${name} ASC
           LIMIT %${page}%
        `)
        return result[0]
}