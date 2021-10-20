import { connection } from "../data/connection";
import { createUser } from "../services/saveUser";
import { app } from "..";
import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/Authenticator";
import { generateHash } from "../services/generateHash";
import { roles } from "../types/authenticationData";



//resposta da letra b) do exercício 2

// e 

// resposta da letra c) do exercício 3 


// Create Account Endpoint
app.post("/user/signup", async (req: Request, res: Response) => {
    try {
        const userCreatonData = {
            email: req.body.email,
            password: req.body.password,
            user_Role: req.body.user_Role as roles
        }

        const id = generateId()

        const hash = generateHash(userCreatonData.password) as any

        await createUser(id, userCreatonData.email, hash, userCreatonData.user_Role)

        const token = generateToken({
            id,
            user_Role: userCreatonData.user_Role
        })


        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email")

        } else if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password")

        } else if (!req.body.user_Role) {
            throw new Error("Invalid role")

        }

        res.status(200).send({ token })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})