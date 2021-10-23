import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";

//Users Endpoints
import { signUpEndP } from "./endpoints/signUpEndP";
import { logInEndP } from "./endpoints/logInEndP";
import { getItSelfProfileEndP } from "./endpoints/getItSelfProfile";
import { getOtherUserProfileEndP } from "./endpoints/getOtherUserProfileEndP";

//Recipes Endpoints 
import { createRecipeEndP } from "./endpoints/createRecipeEndP";
import { getRecipesEndP } from "./endpoints/getRecipesEndP";


export const app: Express = express();

app.use(express.json());
app.use(cors());


// #################
// ### Endpoints ###
// #################

app.get("user/profile", getItSelfProfileEndP);
app.get("/user/:id", getOtherUserProfileEndP);
app.get("/recipe/:id", getRecipesEndP);

app.post("/signup", signUpEndP);
app.post("/login", logInEndP);
app.post("/recipe", createRecipeEndP);

// #################
// ### Endpoints ###
// #################



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is runing in http://localhost:${address.port}`);
    } else {
        console.log(`Failure upon starting the server`)
    }
})
