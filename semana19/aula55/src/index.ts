import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 } from "uuid";

export const app: Express = express();

app.use(express.json());
app.use(cors());



const id = v4()
console.log(`generete ID:${id}`)





const server = app.listen(process.env.PORT || 3003, () => {

    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is runing at https://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server.")
    }
})