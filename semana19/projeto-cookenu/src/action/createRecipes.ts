import { connection } from "../data/connection";

// This function inserts into the data base the id of the recipe, the recipe title, a description or prepare mode of the recipe and the date that the recipe was created 

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