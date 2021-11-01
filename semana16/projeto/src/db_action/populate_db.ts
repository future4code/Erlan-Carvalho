import { connection } from "../connection";

export const populateDataBaseWithCreatedUsers = async (id:string, name: string, nickname: string, email: string) => {
    await connection()
        .insert({
            id,
            name,
            nickname,
            email
        })
        .into("week16ToDoListUser")
}