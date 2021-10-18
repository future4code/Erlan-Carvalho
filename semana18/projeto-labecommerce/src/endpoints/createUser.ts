import { User } from "../classes/User";
import { connection } from "../index";
import { app } from "../index";
import { Request, Response } from "express";

//Create User
app.post("/user", async (req: Request, res: Response) => {
    try {
        await connection("ecommerceUser")
            .insert({
                id: Date.now().toString(),
                userName: req.body.userName,
                userAge: req.body.userAge,
                email: req.body.email
            })
        res.status(200).send("User created!")
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})