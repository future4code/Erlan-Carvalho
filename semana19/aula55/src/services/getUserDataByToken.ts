import * as jwt from "jsonwebtoken";

// resposta da letra b) do exercício 7


const expiresIn = "1 min"

type AuthenticationData = {
    id:string;
}

const getUserDataByToken = (token:string):AuthenticationData =>{
    const playLoad = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id:playLoad.id,
    };
    return result ;
};