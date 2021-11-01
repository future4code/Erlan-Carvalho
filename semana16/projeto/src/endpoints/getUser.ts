import { Request, Response } from "express";
import { selectUserFromDb } from "../db_action/selectUserFromDb";

export const getUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const user = await selectUserFromDb(id);

        if (!id) {
            throw new Error("Invalid Id")

        } else if (!user) {
            res.status(404).send("User Not Found")
            
        } else {
            res.status(200).send({
                id: user.id,
                nickname: user.nickname
            })
        }

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}

