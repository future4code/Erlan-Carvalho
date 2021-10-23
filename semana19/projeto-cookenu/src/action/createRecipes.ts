import { connection } from "../data/connection";

export const createRecipes = async (id: string, recipeTitle: string, description_prepareMode: string, recipeDate: string) => {
    await connection
        .insert(
            {
                id,
                recipeTitle,
                description_prepareMode,
                recipeDate
            })

        .into("cookenuRecipes")

}