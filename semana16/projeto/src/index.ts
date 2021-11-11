import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { createUser } from "./endpoints/createUser";
import { getUser } from "./endpoints/getUser";
import { editUser } from "./endpoints/editUser";

const app: Express = express();

app.use(express.json());
app.use(cors());


// #################
// ### Endpoints ###
// #################

app.post("/user", createUser)
app.get("/user/:id", getUser)
app.put("/user/edit/:id", editUser)

// #################
// ### Endpoints ###
// #################


const server = app.listen(process.env.PORT || 3003, () => {
    const address = server.address() as AddressInfo;
    if (server) {
        console.log(`Server is runing in http://localhost:${address.port}`)
    } else {
        console.log(`Error upon start the server`)
    }
})

