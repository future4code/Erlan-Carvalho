import { selectPokemonsByName } from "../db_action/selectPokemonsByName";
import { Request, Response } from "express";

export const getPokemonByName = async (req: Request, res: Response) => {
    try {

        const Name = req.params.Name;

        const pokemons = await selectPokemonsByName(Name);

        if (!Name || Name.length === 0) {
            res.statusCode = 400;
            throw new Error("Invalid Name");
        } else {
            res.status(200).send({ pokemons });
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}