import { connection } from "../connection";
import { pokemonGo } from "../pokemon"

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

const closeConnection = () => {
    connection.destroy()
}

connection("red_fox_pokemon")
    .insert(pokemonGo.map((pokemon:any) => {
        pokemon.Row_Value = pokemon.Row
        delete pokemon.Row
        return pokemon
    }))
    .then(() => { console.log("Pokemons Inseridos") })
    .catch(printError)
    .finally(closeConnection)
