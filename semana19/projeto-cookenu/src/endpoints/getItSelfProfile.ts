import { app } from "../index";
import { Request, Response } from "express";
import { getUserInfoByToken } from "../action/getUserInfoByToken";
import { getUserInfoById } from "../action/getUserById";

app.get("user/profile", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        const getTheUserInfo = getUserInfoByToken(token)

        const user = await getUserInfoById((getTheUserInfo.id))

        if (!getTheUserInfo) {
            throw new Error("Invalid token")

        } else {
            res.status(200).send({
                id: user.id,
                email: user.email,
                userName: user.userName
            })
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
})