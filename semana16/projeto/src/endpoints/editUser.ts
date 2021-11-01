import { Request, Response } from "express";
import { alterUserTable } from "../db_action/alterUserTable";

export const editUser = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;

        const InfoForEdition =
        {
            name: req.body.name,
            nickname: req.body.nickname
        }

        await alterUserTable
            (
                id,
                InfoForEdition.name,
                InfoForEdition.nickname
            )

        if (!id) {
            throw new Error("Invalid id ");

        } else if (!InfoForEdition.name || InfoForEdition.name.length < 1) {
            throw new Error("Invalid name")

        } else if (!InfoForEdition.nickname || InfoForEdition.nickname.length < 1) {
            throw new Error("Invalid NickName")

        } else {
            res.status(200).send("User Edited")
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message });

    };
};