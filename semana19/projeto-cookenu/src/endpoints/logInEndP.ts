import { Request, Response } from "express";
import { generateToken } from "../services/autheticator";
import { getUserInfo } from "../action/getUserInfo";
import { compareThePasswordWithTheHash } from "../services/encrypt";

export const logInEndP = async (req: Request, res: Response) => {
    try {
        const userData = ({
            email: req.body.email,
            userPassword: req.body.userPassword
        })

        const getUser = await getUserInfo(userData.email)

        const token = generateToken({
            id: getUser.id
        })

        const passwordComaparationWithHash = compareThePasswordWithTheHash(getUser.userPassword, userData.userPassword)


        if (!userData.email || userData.email.indexOf("@") === -1 || userData.email.length === 0) {
            throw new Error("Invalid email")

        } else if (!userData.userPassword || userData.userPassword.length < 6) {
            throw new Error("Invalid Password")

        } else if (!passwordComaparationWithHash) {
            throw new Error("Invalid Password")
        }
        else {
            res.status(200).send({ token })
        }

    } catch (error: any) {

    }
}