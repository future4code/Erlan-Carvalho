import { Request, Response } from "express";
import { getUserInfoByToken } from "../action/getUserInfoByToken";
import { getRecipeById } from "../action/getRecipesById";


export const getRecipesEndP = async (req: Request, res: Response) => {
    try {
        const theRecipeId = req.params.id;

        const token = req.headers.authorization as string;

        const validationOfToken = getUserInfoByToken(token);

        const recipe = await getRecipeById(theRecipeId)


        if (!theRecipeId) {
            throw new Error("Invalid Id ")

        } else if (!validationOfToken) {
            throw new Error("Invalid Token")

        } else {
            res.status(200).send(
                {
                    id: recipe.id,
                    recipeTitle: recipe.recipeTitle,
                    description_prepareMode: recipe.description_prepareMode,
                    recipeDate:recipe.recipeDate
                })
        }


    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}