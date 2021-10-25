import { connection } from "../data/connection"

export default async function slectAllUsersAndSort(name: string): Promise<any> {
    const result = await connection.raw
    (`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE ${name} LIKE %${name}%
       ORDER BY ${name} ASC
    `)

    return result[0]
}