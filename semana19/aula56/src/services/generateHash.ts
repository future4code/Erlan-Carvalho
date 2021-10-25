import * as bcrypt from "bcryptjs";

// resposta da letra b) do exercício 1 

export const generateHash = async (string: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(string, salt)
    return result
}

//resposta da letra c) do exercício 1 

export const compareGivenStringAndHash = async (string: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(string, hash)
}