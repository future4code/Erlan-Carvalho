import { Request, Response } from "express";
import { getUserInfoByToken } from "../action/getUserInfoByToken";
import { getUserInfoById } from "../action/getUserById";
import { authenticationData } from "../types/authenticationData";
import { connection } from "../data/connection";
import authInterface from "../types/authAndRoles";
import { getToken } from "../services/autheticator";

export const getItSelfProfileEndP = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        const validationOfToken = getToken(token) as authInterface


        const getPersonLogedProfile = async (id: string): Promise<any> => {
            const result = await connection("cookenuUser").select("id", "userName", "email").where({ id })
            return result

        }
        const user = await getPersonLogedProfile(validationOfToken.id)


        if (!validationOfToken) {
            throw new Error("Invalid token")

        } else {
            res.status(200).send({ user })
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}