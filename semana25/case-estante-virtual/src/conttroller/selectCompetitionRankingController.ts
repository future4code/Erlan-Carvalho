import { Request, Response } from "express";
import { selectCompetitionRankingData } from "../data/selectCompetitionRankingData";

export const selectCompetitionRankingController = async (req: Request, res: Response) => {

    try {

        const ranking = await selectCompetitionRankingData()

        if (!ranking) {
            res.statusCode = 404
            throw new Error("Ranking was not found")
        } else {
            res.status(200).send({ ranking })
            
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })

    }
}