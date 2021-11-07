import { connection } from "../connection";

export const insertANewPokemon = async (Row_Value: string,
    Name: string,
    Pokedex_Number: string,
    Img_name: string,
    Generation: string,
    Evolution_Stage: string,
    Evolved: string,
    FamilyID: string,
    Cross_Gen: string,
    Type1: string,
    Type2: string,
    Weather1: string,
    Weather2: string,
    S8TAT_TOTAL: string,
    ATK: string,
    DEF: string,
    STA: string,
    Legendary: string,
    Aquireable: string,
    Spawns: string,
    Regional: string,
    Raidable: string,
    Hatchable: string,
    Shiny: string,
    Nest: string,
    New: string,
    NotGettable: string,
    Future_Evolve: string,
    CP40: string,
    CP39: string) => {
    const insertion = await connection.raw(`
    INSERT INTO red_fox_pokemon(Row_Value,
        Name ,
        Pokedex_Number ,
        Img_name ,
        Generation ,
        Evolution_Stage ,
        Evolved ,
        FamilyID ,
        Cross_Gen ,
        Type1 ,
        Type2 ,
        Weather1 ,
        Weather2 ,
        S8TAT_TOTAL ,
        ATK ,
        DEF ,
        STA ,
        Legendary ,
        Aquireable ,
        Spawns ,
        Regional ,
        Raidable ,
        Hatchable ,
        Shiny ,
        Nest ,
        New ,
        NotGettable ,
        Future_Evolve ,
        CP40,
        CP39 )
        VALUES("${Row_Value}"
        "${Name}"
        "${Pokedex_Number}"
        "${Img_name}"
        "${Generation}"
        "${Evolution_Stage}"
        "${Evolved}"
        "${FamilyID}"
        "${Cross_Gen}"
        "${Type1}"
        "${Type2}"
        "${Weather1}"
        "${Weather2}"
        "${S8TAT_TOTAL}"
        "${ATK}"
        "${DEF}"
        "${STA}"
        "${Legendary}"
        "${Aquireable}"
        "${Spawns}"
        "${Regional}"
        "${Raidable}"
        "${Hatchable}"
        "${Shiny}"
        "${Nest}"
        "${New}"
        "${NotGettable}"
        "${Future_Evolve}"
        "${CP40}"
        "${CP39}")`)

}

