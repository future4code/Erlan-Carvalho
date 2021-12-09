import { Request, Response } from "express";
import { selectProductsDataByNameOrId } from "../data/selectProductsData";

export const selectProductsByNameOrIdController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const name = req.query.name as string;

        const resultUsingName = await selectProductsDataByNameOrId(name, id);
        const resultUsingId = await selectProductsDataByNameOrId(id, name);

        const idResponse = res.status(200).send({ resultUsingId });
        const nameResponse = res.status(200).send({ resultUsingName });


        if (id) {

            return idResponse 
        }
        if (name) {

            return nameResponse
        }

    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}

