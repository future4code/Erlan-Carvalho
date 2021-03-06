import { Request, Response } from "express";
import { selectAllProductsData } from "../data/selectAllProductsData";

export const selectAllProductsController = async (req: Request, res: Response) => {
    try {

        const result = await selectAllProductsData();

        if (!result) {
            res.statusCode = 404
            throw new Error("Information was not found!")

        } else {
            res.status(200).send({ result })
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}