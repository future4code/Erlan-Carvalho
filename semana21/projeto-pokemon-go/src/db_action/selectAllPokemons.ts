import {connection} from "../connection";

export const selectAllPokemons = async () =>{
 const result =  await connection().
select("*").
from("red_fox_pokemon")

return result[0]
}