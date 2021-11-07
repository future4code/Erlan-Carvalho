import { Request, Response } from "express"
import { insertANewPokemon } from "../db_action/insertANewPokemon"


export const addPokemon = async (req: Request, res: Response) => {
    try {

        const newPokemonBody = (
            {
                Row_Value: req.body.Row_Value,
                Name: req.body.Name,
                Pokedex_Number: req.body.Pokedex_Number,
                Img_name: req.body.Img_name,
                Generation: req.body.Generation,
                Evolution_Stage: req.body.Evolution_Stage,
                Evolved: req.body.Evolved,
                FamilyID: req.body.FamilyID,
                Cross_Gen: req.body.Cross_Gen,
                Type1: req.body.Type1,
                Type2: req.body.Type2,
                Weather1: req.body.Weather1,
                Weather2: req.body.Weather2,
                S8TAT_TOTAL: req.body.S8TAT_TOTAL,
                ATK: req.body.ATK,
                DEF: req.body.DEF,
                STA: req.body.STA,
                Legendary: req.body.Legendary,
                Aquireable: req.body.Aquireable,
                Spawns: req.body.Spawns,
                Regional: req.body.Regional,
                Raidable: req.body.Raidable,
                Hatchable: req.body.Hatchable,
                Shiny: req.body.Shiny,
                Nest: req.body.Nest,
                New: req.body.New,
                NotGettable: req.body.NotGettable,
                Future_Evolve: req.body.Future_Evolve,
                CP40: req.body.CP40,
                CP39: req.body.CP39
            })

        const addThePokemon = await insertANewPokemon(newPokemonBody.ATK, newPokemonBody.Aquireable, newPokemonBody.CP39, newPokemonBody.CP40, newPokemonBody.Cross_Gen, newPokemonBody.DEF, newPokemonBody.Evolution_Stage, newPokemonBody.Evolved, newPokemonBody.FamilyID, newPokemonBody.Future_Evolve, newPokemonBody.Generation, newPokemonBody.Hatchable, newPokemonBody.Img_name, newPokemonBody.Legendary, newPokemonBody.Name, newPokemonBody.Nest, newPokemonBody.New, newPokemonBody.NotGettable, newPokemonBody.Pokedex_Number, newPokemonBody.Raidable, newPokemonBody.Regional, newPokemonBody.Row_Value, newPokemonBody.S8TAT_TOTAL, newPokemonBody.STA, newPokemonBody.Shiny, newPokemonBody.Spawns, newPokemonBody.Type1, newPokemonBody.Type2, newPokemonBody.Weather1, newPokemonBody.Weather2)

        if (!req.body || req.body === 0) {
            res.statusCode = 400;
            throw new Error("Invalid Body")

        } else {
            res.status(200).send("Pokemon added")
        }

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}



