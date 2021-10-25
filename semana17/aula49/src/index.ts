import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";

// Endpoint to get users
import { getAllUsers } from "./endpoints/getAllUsersEndP";
import { getAllUsersByName } from "./endpoints/getAllUserByNameEndP";
import { getAllUsersByNameWithQueryEndP } from "./endpoints/getAllUsersByNameWithQueryEndP";
import { getAllUsersAndSortEndP } from "./endpoints/getAllUsersAndSortEndP";

const app: Express = express();

app.use(express.json())
app.use(cors())


// ###############
// ## Endpoints ##    
// ###############

app.get("/user" , getAllUsers);
app.get("/user/:name", getAllUsersByName)
app.get("/users", getAllUsersByNameWithQueryEndP)
app.get("/users/sort", getAllUsersAndSortEndP)

// ###############
// ## Endpoints ##    
// ###############


const server = app.listen(process.env.PORT || 3003, () => {

    const address = server.address() as AddressInfo
    if (server) {
        console.log(`Server is runing in http://localhost:${address.port}`)
    } else {
        console.log(`Error upon starting server`)
    }
})