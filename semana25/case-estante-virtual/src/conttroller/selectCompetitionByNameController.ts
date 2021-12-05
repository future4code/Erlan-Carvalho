import { Request, Response } from "express";
import { selectCompetitionByNameData } from "../data/selectCompetitionByNameData";

export const selectCompetitionByNameController = async (req: Request, res: Response) => {

    try {

        const competicao = req.params.competicao

        const result = await selectCompetitionByNameData(competicao)

        if (!competicao) {
            res.statusCode = 400
            throw new Error("Competition name is missing")
        } else if (!result) {
            res.statusCode = 404
            throw new Error("Any Competition was found")
        } else {
            res.status(200).send({ result })
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })

    }
}