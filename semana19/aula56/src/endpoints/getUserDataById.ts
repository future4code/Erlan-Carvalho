import { connection } from "../data/connection";
import { getUserDataByToken } from "../services/getUserDataByToken";
import { app } from "..";
import { Request, Response } from "express";
import { getUserById } from "../services/getUserById";



// Resposta do exercício 4


// get the user data by id Endpoint 
app.get("/user/profile", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = getUserDataByToken(token);

        const theUser = await getUserById(authenticationData.id, authenticationData.user_Role);

        if(theUser.authenticationData.user_Role !== "normal"){
            throw new Error ("Unauthorized, access authorized only for normal users")
        }

        res.status(200).send({
            id: theUser.id,
            email: theUser.email,
        });

    } catch (error: any) {
        res.status(400).send({ message: error.message })

    };
});