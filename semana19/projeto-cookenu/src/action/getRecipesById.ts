import { connection } from "../data/connection";

// This function gets the recipes into the data base using the user id 

export const getRecipeById = async( id:string) =>{
    const result = await connection
    .select ("*")
    .from("cookenuRecipes")
    .where({id})

    return result[0]
}