import { Request, Response } from "express";
import { registerUser } from "../action/registerUser"
import { generateId } from "../services/idCreation";
import { generateHash } from "../services/encrypt";
import { generateToken } from "../services/autheticator";


//SignUP EndPoint
export const signUpEndP =  async (req: Request, res: Response) => {
    try {
        const doTheSignUp =
        {
            userName: req.body.userName,
            email: req.body.email,
            userPassword: req.body.userPassword
        };

        const id = generateId()

        const password = generateHash(doTheSignUp.userPassword) as string | any

        const token = generateToken({ id })

        await registerUser
            (
                id,
                doTheSignUp.userName,
                doTheSignUp.email,
                password
            )

        if (!doTheSignUp.userName || doTheSignUp.userName.length === 0) {
            throw new Error("Invalid user name")

        } else if (!doTheSignUp.email || doTheSignUp.email.indexOf("@") === -1 || doTheSignUp.email.length === 0) {
            throw new Error("Invalid email")

        } else if (!doTheSignUp.userPassword || doTheSignUp.userPassword.length < 6) {
            throw new Error("Invalid Password")

        } else {
            res.status(200).send({ token })
        }

    } catch (error: any) {
        res.status(500).send({ message: error.message })

    }
}