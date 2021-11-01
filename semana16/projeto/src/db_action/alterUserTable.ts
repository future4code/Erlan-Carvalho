import { connection } from "../connection";

export const alterUserTable = async (id: string, name: string, nickname: string): Promise<void> => {
    await connection("week16ToDoListUser")
        .update({
            name,
            nickname
        })
        .where("id", id)

}