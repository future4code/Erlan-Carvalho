
export type extract = {
    valor:number,
    data:string,
    description:string
}

export type user = {
    name:string,
    CPF: string,
    birthDate: Date,
    balance:number,
    expenses:extract[]
}