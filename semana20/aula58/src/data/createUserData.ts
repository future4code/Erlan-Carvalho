import {connection} from "../connection";

const TABLE_NAME = "User_Arq";

export enum UserRole{
  NORMAL="NORMAL",
  ADMIN = "ADMIN"
};

export const  createUser =  async(
    id: string,
    email: string,
    name: string,
    password: string,
		role: UserRole //opcional criar ENUM
  ): Promise<void> =>{
    try {
      await connection()
        .insert({
          id,
          email,
          name,
          password,
					role
        })
        .into(TABLE_NAME);
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
