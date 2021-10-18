import { Product } from "../classes/Product";
import { connection } from "../index";
import { app } from "../index";
import { Request, Response } from "express";

//Get all Product
app.get("/product", async (req: Request, res: Response) => {
    try {
        const getTheProducts: Array<Product> = await connection.raw(`SELECT * FROM ecommerceUser`)

        res.status(200).send(getTheProducts)

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})