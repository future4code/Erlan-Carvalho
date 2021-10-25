import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { insertAddressIntoDB } from "../services/insertAddressIntoDB";
import { insertUsersIntoDB } from "../services/insertUsersIntoDB";

export const signUpEndP = async (req: Request, res: Response) => {
    try {

        const usersInfo = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
            address: req.body.address,

            cep: req.body.cep,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado
        }


        const userId = generateId()

        insertUsersIntoDB(userId, usersInfo.name, usersInfo.nickname, usersInfo.email, usersInfo.address)



        const addresId = generateId()

        insertAddressIntoDB(addresId, usersInfo.cep, usersInfo.logradouro, usersInfo.numero, usersInfo.complemento, usersInfo.bairro, usersInfo.cidade, usersInfo.estado)


        if (!usersInfo.name || !usersInfo.nickname || !usersInfo.email || !usersInfo.address) {
            throw new Error("Invalid User informartion.")

        } else {
            res.status(200).send("User created")
        }


        if (!usersInfo.cep || !usersInfo.logradouro || !usersInfo.numero || !usersInfo.complemento || !usersInfo.bairro || !usersInfo.cidade || !usersInfo.estado) {
            throw new Error("Invalid address Information")

        } else {
            res.status(200).send("Address created successfully")
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }

}