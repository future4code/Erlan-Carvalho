import axios from "axios";

//Exercício 1 

export const reciveCepAndGetData = async (cep: string): Promise<any> => {
    try {
        const request: any = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return (
            {
                logradouro: request.data.logradouro,
                bairro: request.data.bairro,
                cidade: request.data.localidade,
                estado: request.data.uf
            })
    } catch (error: any) {
        return ({ message: error.message })

    }

}