import { connection } from "../data/connection";

export const insertAddressIntoDB = (id: string, cep:string ,logradouro: string, numero: number, complemento: string, bairro: string, cidade: string, estado: string) => {

    connection()
        .insert(
            {
                id,
                cep,
                logradouro,
                numero,
                complemento,
                bairro,
                cidade,
                estado
            })
        .into("userAddress")    
}