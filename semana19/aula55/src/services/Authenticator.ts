import * as jwt from "jsonwebtoken";

const token = jwt.sign(
    { id: "aeiou" },
    "bananinha",
    { expiresIn: "24h" }
)

const tokenData = jwt.verify(
    token,
    "bananinha"
)



type authenticationData = { id: string }
export const generateToken = (input: authenticationData): string => {
    return jwt.sign(
        input,
        String(process.env.JWT_KEY),
        { expiresIn: '1d' }
    )
}
export const getTokenData = (token: string): authenticationData | null => {
    try {
        const { id } = jwt.verify(token, String(process.env.JWT_KEY)) as authenticationData
        return { id }
    } catch (error) { return null }
}

// export class Authenticator {
//     public generateToken = (): string => {
//         return token
//     }

//     public getTokenData = (): string | jwt.JwtPayload => {
//         return tokenData
//     }
// }
