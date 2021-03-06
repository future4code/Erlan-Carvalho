import { Request, Response } from "express";
import { getUserInfoByToken } from "../action/getUserInfoByToken";
import { getUserInfoById } from "../action/getUserById";

export const getOtherUserProfileEndP = async (req: Request, res: Response) => {
    try {
        const getTheothersUsersId = req.params.id

        const token = req.headers.authorization as string

        const validationOfToken = getUserInfoByToken(token)

        const theOthersUsers = await getUserInfoById(getTheothersUsersId)

        if(!getTheothersUsersId){   
            throw new Error("Invalid Id")

        }
        else if (!validationOfToken) {
            throw new Error("Invalid Token")

        } else {
            res.status(200).send({
                id: theOthersUsers.id,
                userName: theOthersUsers.name,
                email: theOthersUsers.email
            })
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}