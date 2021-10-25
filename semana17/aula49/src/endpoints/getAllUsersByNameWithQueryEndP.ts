import { Request, Response } from "express";
import selectAllUserUsingQuery from "../services/selectAllUserUsingQuery";


// Exercício 1 

//letra a)

export const getAllUsersByNameWithQueryEndP = async (req: Request, res: Response) => {
    try {

        const queryOfUserName = req.query.name as string

        const result = await selectAllUserUsingQuery(queryOfUserName)

        if (!queryOfUserName) {
            throw new Error("Invalid query")

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