import { connection } from "../connection";
import pokemonGo from "../pokemonGo.json";

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

const insertPokemons = ()=>connection("pokemonTable")
.insert(pokemonGo)
.then(()=>{console.log("Pokemons Inseridos")})
.catch(printError)


const closeConnection = () =>{
    connection.destroy()
}
insertPokemons()
.then(closeConnection)


