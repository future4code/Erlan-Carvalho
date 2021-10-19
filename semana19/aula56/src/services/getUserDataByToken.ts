import * as jwt from "jsonwebtoken";

const expiresIn = "1 min"

type AuthenticationData = {
    id: string;
}

export const getUserDataByToken = (token: string): AuthenticationData => {
    const playLoad = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id: playLoad.id,
    };
    return result;
};