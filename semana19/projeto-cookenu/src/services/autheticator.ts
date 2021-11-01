import { authenticationData } from "../types/authenticationData";
import * as jwt from "jsonwebtoken";

export const generateToken = (input: authenticationData): string => {
    return jwt.sign(
        { id: input.id },
        String(process.env.JWT_KEY),
        { expiresIn: "5min" })
}

export const getToken = (token: string): authenticationData | null => {
    try {
        const { id } = jwt.verify(token, String(process.env.JWT_KEY)) as authenticationData
        return { id }

    } catch (error) {
        return null
    }
}