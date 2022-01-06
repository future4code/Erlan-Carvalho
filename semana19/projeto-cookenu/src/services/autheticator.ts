import { authenticationData } from "../types/authenticationData";
import * as jwt from "jsonwebtoken";
import authInterface from "../types/authAndRoles";

export const generateToken = (input: authenticationData): string => {
    return jwt.sign(
        { id: input.id },
        String(process.env.JWT_KEY),
        { expiresIn: "18h" })
}

export const getToken = (token: string):authInterface  => {
    try {
        const tokenData= jwt.verify(token, String(process.env.JWT_KEY)) as jwt.JwtPayload
        return {id: tokenData.id ,role:tokenData.role}

    } catch (error:any) {
        return error
    }
}
