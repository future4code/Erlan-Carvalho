import selectAllUsersByName from "../services/selectAllUsersByName";
import { Request, Response } from "express";



//exercício 1 

// letra b)

export const getAllUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {

        const userName = req.params.name;

        const users = await selectAllUsersByName(userName);


        if (!userName.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send({users})

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}