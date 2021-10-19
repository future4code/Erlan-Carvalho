import { connection } from "../data/connection";

const userTableName = (`toDoListUser`)

export const  getUserById = async( id: string): Promise<any>=> {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  }