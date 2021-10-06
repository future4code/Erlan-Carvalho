import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { user } from './data';
import { accounts } from "./accounts";

const app: Express = express()

app.use(express.json())
app.use(cors())


app.post("/user/resgister", (res: Response, req: Request) => {
    try {
        const { name, CPF, birthDate } = req.body
        const limitBirthDate = new Date('2003-09-20')
        const addNewUser = accounts.push({
            name,
            CPF,
            birthDate,
            balance: 0,
            expenses: []
        })
        if (birthDate < limitBirthDate) {
            throw new Error("ERROR!! Try again when you beign over 18.");

        } else {
            res.status(200).send("Account created successfully")
        }
    } catch (error: any) {
        res.status(400).send(error.massage)

    }
})

app.get("/balance/:cpf", (res: Response, req: Request) => {

    try {
        const balanceResult: user | undefined | number = accounts.find((theCpf) => {
            if (req.params.cpf === theCpf.CPF) {
                return (
                    theCpf.balance
                )
            } else if (theCpf.CPF !== req.params.cpf) {
                throw new Error("CPF Incorrect, please type again.");

            }
        })
        res.status(200).send(balanceResult)

    } catch (error: any) {
        res.status(400).send(error.massage)

    }
})

app.put("/add/balance", (res: Response, req: Request) => {

    try {
        const name = req.body.name
        const cpf = req.body.CPF
        const balance = req.body.balance

        res.status(200).send({ name, cpf, balance })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }

})





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is runig in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon start server`)
    }
})


