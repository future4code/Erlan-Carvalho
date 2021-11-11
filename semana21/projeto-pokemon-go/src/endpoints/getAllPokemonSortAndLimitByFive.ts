import { Request, Response } from "express";
import { selectSortAndPaginateAllPokemons } from "../db_action/selectSortAndPaginateAllPokemons";

export const getAllPokemonSortAndLimitByFive = async (req: Request, res: Response) => {
    try {

        const queryName = req.query.Name as string;
        const queryPage = req.query.page as string;

        const pokemonsSortAndPaginated = await selectSortAndPaginateAllPokemons(queryName, queryPage)

        if (!queryName || queryName.length === 0) {
            res.statusCode = 400;
            throw new Error("Invalid provided Name ")

        } else if (!queryPage || queryPage.length === 0) {
            res.statusCode = 400;
            throw new Error("Invalid provided page ")

        } else {
            res.status(200).send({ pokemonsSortAndPaginated })
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}