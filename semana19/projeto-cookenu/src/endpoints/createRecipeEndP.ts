import { Request, Response } from "express";
import { getUserInfoByToken } from "../action/getUserInfoByToken";
import { createRecipes } from "../action/createRecipes";
import { generateId } from "../services/idCreation";

export const createRecipeEndP = async (req: Request, res: Response) => {
    try {
        const theToken = req.headers.authorization as string;

        const validationOfToken = getUserInfoByToken(theToken);


        const recipeInfo = (
            {
                recipeTitle: req.body.recipeTitle,
                description_prepareMode: req.body.description_prepareMode

            })

        const id = generateId()

        const date = new Date

        const recipeDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `

        await createRecipes(id, recipeInfo.recipeTitle, recipeInfo.description_prepareMode, recipeDate)


        if (!validationOfToken) {
            throw new Error("Invalid Token")

        } else if (!recipeInfo.recipeTitle) {

            throw new Error("Recipe Title is missing")

        } else if (!recipeInfo.description_prepareMode) {
            throw new Error("Description or Prepare Mode of the recipe are missing ")

        } else {
            res.status(200).send("Success! Recipe created.")
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}