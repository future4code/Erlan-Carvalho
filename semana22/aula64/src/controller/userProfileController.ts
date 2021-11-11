import { Request, Response } from "express";
import { getProfileByiD } from "../data/userProfileData";

export const getUserProfileById = async (req: Request, res: Response) => {
    try {

        const idAsParam = req.params.id;

        const profile = await getProfileByiD(idAsParam);

        if (!idAsParam) {
            res.statusCode = 400
            throw new Error("Invalid ID")
        } else {
            res.status(200).send({ profile })
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}