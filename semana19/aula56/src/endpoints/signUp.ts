import { connection } from "../data/connection";
import { createUser } from "../services/saveUser";
import { app } from "..";
import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/Authenticator";
import {generateHash} from "../services/generateHash";


// Create Account Endpoint

//resposta da letra b) do exercício 2

app.post("/user/signup", async (req: Request, res: Response) => {
    try {
        const userCreatonData = {
            email: req.body.email,
            password: req.body.password
        }
        const id = generateId()

        const hash = generateHash(userCreatonData.password) as any

        await createUser(id, userCreatonData.email, hash)

        const token = generateToken({
            id
        })

        res.status(200).send({ token })

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email")

        } else if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password")

        }
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})