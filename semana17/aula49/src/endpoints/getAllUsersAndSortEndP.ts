import { Request, Response } from "express";
import slectAllUsersAndSort from "../services/selectAllUsersAndSort";

export const getAllUsersAndSortEndP = async (req: Request, res: Response) => {
    try {


        const queryOfUserName = req.query.name as string

        const users = await slectAllUsersAndSort(queryOfUserName)

        if (!queryOfUserName) {
            throw new Error("Invalid query")

        } else if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")

        } else {
            res.status(200).send({ users })
        }



        res.status(200).send({ users })


    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}