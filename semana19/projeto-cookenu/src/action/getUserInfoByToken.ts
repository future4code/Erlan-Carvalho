import { authenticationData } from "../types/authenticationData";
import * as jwt from "jsonwebtoken";

//Verify the validity and veracity of the token  

export const getUserInfoByToken = (token: string): authenticationData => {
    const playload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {
        id: playload.id
    }

    return result
}