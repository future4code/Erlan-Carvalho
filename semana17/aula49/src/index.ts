import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json())
app.use(cors())



const server = app.listen(process.env.PORT || 3003, () => {

    const address = server.address() as AddressInfo
    if (server) {
        console.log(`Server is runing in http://localhost:${address.port}`)
    } else {
        console.log(`Error upon starting server`)
    }
})