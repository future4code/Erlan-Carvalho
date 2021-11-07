import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";

//Endpoints 
import { getAllPokemons } from "./endpoints/getAllPokemons";
import { getPokemonByName } from "./endpoints/getPokemonByName";
import { getAllPokemonAndSort } from "./endpoints/getAllPokemonsAndSort";
import { getAllPokemonSortAndLimitByFive } from "./endpoints/getAllPokemonSortAndLimitByFive";
import { addPokemon } from "./endpoints/addANewPokemon";

const app: Express = express();

app.use(express.json());
app.use(cors());


//#################
//### Endpoints ###
//#################

app.get("/pokemon", getAllPokemons);
app.get("/pokemon/:Name", getPokemonByName);
app.get("/pokemon/sort", getAllPokemonAndSort);
app.get("/pokemon/sort/paginate", getAllPokemonSortAndLimitByFive);
app.post("/pokemon" , addPokemon);

//#################
//### Endpoints ###
//#################


const server = app.listen(process.env.PORT || 3003, () => {
    const address = server.address() as AddressInfo;

    if (server) {
        console.log(`Server is runing in http://localhost:${address.port}`)
    } else {
        console.log(`Èrror upon Starting the server`)
    }
})
