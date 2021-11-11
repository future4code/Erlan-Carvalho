import { Request, Response } from "express";
import { populateDataBaseWithCreatedUsers } from "../db_action/populate_db";

export const createUser = async (req: Request, res: Response) => {
    try {

        const id = Date.now().toString()

        const userInfo =
        {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }

        await populateDataBaseWithCreatedUsers(id, userInfo.name, userInfo.nickname, userInfo.email);

        if (!userInfo.name) {
            throw new Error("Invalid name")

        } else if (!userInfo.nickname) {
            throw new Error("Invalid NickName")

        } else if (!userInfo.email || userInfo.email.indexOf("@") === -1) {
            throw new Error("Invalid Email")

        } else {
            res.status(200).send("User Created");
        }

        
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    };
};