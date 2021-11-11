import { connection } from "../connection";

export const selectUserFromDb = async (id:string):Promise<any>=> {
     const result = await connection()
        .select("id", "nickname")
        .from("week16ToDoListUser")
        .where({id})

        return result[0];
}