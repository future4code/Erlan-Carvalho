import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from "dotenv";

// User signup endpoint
import { signUpEndP } from "./enpoints/signUpEndP";


const app: Express = express();

app.use(express.json())
app.use(cors())

//###############
//## Endpoints ##
//###############

app.post("/signup/user", signUpEndP)

//###############
//## Endpoints ##
//###############

dotenv.config();

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is runing in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server`)
    }
})

