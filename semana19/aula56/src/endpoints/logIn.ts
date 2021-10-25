import { connection } from "../data/connection";
import { getUserInfo } from "../services/getUserInfo";
import { app } from "..";
import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/Authenticator";
import { compareGivenStringAndHash } from "../services/generateHash"


// respposta da letra c) do exercício 2 

// e

// resposta da letra d) do exercício 3

// Login  Endpoint

app.post("/user/login", async (req: Request, res: Response) => {
    try {
        const userCreatonData = {
            email: req.body.email,
            password: req.body.password
        }

        const user = await getUserInfo(userCreatonData.email)

        const token = generateToken({
            id: user.id,
            user_Role: user.user_Role
        })

        const passwordComparationWtihHash = await compareGivenStringAndHash(userCreatonData.password, user.password)

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email")
        }

        if (!passwordComparationWtihHash) {
            throw new Error("invalid password")
        }

        res.status(200).send({ token })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})