import { User } from "../classes/User";
import { connection } from "../index";
import { app } from "../index";
import { Request, Response } from "express";

//Get all Users
app.get("/user", async (req: Request, res: Response) => {
    try {
        const getTheUsers: User[] = await connection.raw(`SELECT * FROM ecommerceUser`)

        res.status(200).send(getTheUsers)

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})