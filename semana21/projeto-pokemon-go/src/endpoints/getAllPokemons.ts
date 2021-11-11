import { selectAllPokemons } from "../db_action/selectAllPokemons";
import { Request, Response } from "express";

export const getAllPokemons = async (req: Request, res: Response) => {
    try {
        const pokemons = await selectAllPokemons();

        if (!pokemons) {
            res.statusCode = 404
            throw new Error(" No Pokemon was found ")
        } else {
            res.status(200).send({ pokemons })
        }

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}