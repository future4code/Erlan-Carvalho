import { connection } from "../data/connection";
import { createUser } from "../services/saveUser";
import { app } from "..";
import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/Authenticator";


// Create ACcount Endpoint

app.post("/user/signup", async (req: Request, res: Response) => {
    try {
        const userCreatonData = {
            email: req.body.email,
            password: req.body.password
        }
        const id = generateId()

        await createUser(id, userCreatonData.email, userCreatonData.password)

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