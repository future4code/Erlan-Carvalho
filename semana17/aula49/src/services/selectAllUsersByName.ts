import { connection } from "../data/connection"

export default async function selectAllUsersByName(name:string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE ${name}
    `)

    return result[0]
}