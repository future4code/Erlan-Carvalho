import { connection } from "../data/connection";
import { getUserInfo } from "../services/getUserInfo";
import { app } from "..";
import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/Authenticator";

//Letras a) b) 


// Login  Endpoint

app.post("/user/login", async (req: Request, res: Response) => {
    try {
        const userCreatonData = {
            email: req.body.email,
            password: req.body.password
        }
        const id = generateId()

        await getUserInfo(userCreatonData.email)

        const token = generateToken({
            id
        })

        res.status(200).send({ token })

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email")
        }

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})