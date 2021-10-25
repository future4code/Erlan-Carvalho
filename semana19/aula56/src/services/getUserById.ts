import { connection } from "../data/connection";
import { roles } from "../types/authenticationData";

// foi auxiliar na resposta do exercício 4 

const userTableName = (`toDoListUser`)

export const getUserById = async (id: string, user_Role: roles): Promise<any> => {
  const result = await connection
    .select("*")
    .from(userTableName)
    .where({ id });

  return result[0];
}