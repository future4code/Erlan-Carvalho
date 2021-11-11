import { selectAllPokemonsAndSort } from "../db_action/selectAllPokemonsAndSort";
import { Request, Response } from "express";

export const getAllPokemonAndSort = async (req: Request, res: Response) => {
    try {
        const queryName = req.query.Name as string;

        const pokemonsSortedInAIncreasingWay = await selectAllPokemonsAndSort(queryName)

        if (!queryName) {
            res.statusCode = 400;
            throw new Error("Invalid name")
        } else {
            res.status(200).send({ pokemonsSortedInAIncreasingWay })
        }

    } catch (error: any) {
        res.status(500).send({ message: error.message })

    }
}