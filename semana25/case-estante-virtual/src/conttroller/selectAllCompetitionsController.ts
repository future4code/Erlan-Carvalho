import { Request, Response } from "express";
import { selectAllCompetitionsData } from "../data/selectAllCompetitionsData";

export const selectAllCompetitionsController = async (req: Request, res: Response) => {

    try {

        const result = await selectAllCompetitionsData()

        if (!result) {
            res.statusCode = 404
            throw new Error(" Any Competition was found")
        } else {
            res.status(200).send({ result })
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })

    }
}