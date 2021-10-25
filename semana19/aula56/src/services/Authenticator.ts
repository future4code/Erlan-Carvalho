import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/authenticationData";


// respostas da letra b)  do exercício 3 

export const generateToken = (input: authenticationData): string => {
    return jwt.sign(
        {id: input.id,
        input: input.user_Role},

        String(process.env.JWT_KEY),

        {
             expiresIn:"1min"
        }
    )
}
export const getTokenData = (token: string): authenticationData | null => {
    try {
        const { id } = jwt.verify(token, String(process.env.JWT_KEY)) as authenticationData
        const { user_Role } = jwt.verify(token, String(process.env.JWT_KEY)) as authenticationData

        return { id , user_Role}
    } catch (error) { return null }
}




// export const token = jwt.sign(
//     { id: "aeiou" },
//     "bananinha",
//     { expiresIn: "24h" }
// )

// export const tokenData = jwt.verify(
//     token,
//     "bananinha"
// )




