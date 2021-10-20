import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/authenticationData";

const expiresIn = "1 min"

//foi auxiliar na resposta do exercício 4

export const getUserDataByToken = (token: string): authenticationData => {
    const playLoad = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id: playLoad.id,
        user_Role:playLoad.user_Role
    };
    return result;
};