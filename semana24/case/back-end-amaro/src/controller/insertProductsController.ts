import { Request, Response } from "express";
import { insertProductsData } from "../data/insertProductsData";


export const insertProductsController = async (req: Request, res: Response) => {
    try {
        const body =
        {
            id: req.body.id,
            name: req.body.name,
            tags: req.body.tags as string[]
        }

        if (!body.id || !body.name || !body.tags) {
            res.statusCode = 404
            throw new Error("Body is missing")
        } else {
            const tagString = body.tags
            await insertProductsData(body.id, body.name, tagString.toString())

            res.status(200).send("Product inserted")
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}