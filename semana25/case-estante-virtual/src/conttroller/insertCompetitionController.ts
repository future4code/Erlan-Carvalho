import { Request, Response } from "express";
import { insertCompetitionData } from "../data/insertCompetitionData";
import { generateId } from "../service/idGenerator";

export const insertCompetitionController = async (req: Request, res: Response) => {

    try {

        const {
            competicao,
            atleta,
            value,
            unidade } = req.body

        const id = generateId()

        if (!req.body) {
            res.statusCode = 400
            throw new Error("Body is missing")
        } else {
            await insertCompetitionData(id, competicao, atleta, value, unidade)
            res.status(200).send("Competitions inserted")
        }

    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })

    }
}