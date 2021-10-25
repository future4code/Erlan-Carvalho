import { Request, Response } from "express";
import { selectFiveUsersAtATimeByPage } from "../services/selectFiveUsersAtATimeByPage";

export const getFiveUsersAtATime = async (req: Request, res: Response) => {
    try {

        const page = req.query.page as string;

        const queryOfUserName = req.query.name as string

        const result = await selectFiveUsersAtATimeByPage(queryOfUserName, page)

        if (!queryOfUserName) {
            throw new Error("Invalid query")

        } else if (!page) {
            throw new Error("Invalid page")

        } else if (!result.length) {
            res.statusCode = 404
            throw new Error("No users found")

        } else {
            res.status(200).send({ result })
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}