import { Request, Response } from "express";
import selectAllUsersByName from "../services/selectAllUsersByName";


// Exercício 1 

//letra a)

export const getAllUsersByNameWithQueryEndP = async (req: Request, res: Response) => {
    try {

        const queryOfUserName = req.query.name as string

        const result = await selectAllUsersByName(queryOfUserName)

        if (!queryOfUserName) {
            throw new Error("Invalid query")

        } else {
            res.status(200).send({result})
        }

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }

}