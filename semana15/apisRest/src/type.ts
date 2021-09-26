
export enum TYPE {
    NORMAL='NORMAL',
    ADMIN = "ADMIN"
}

export type usersInfo = {
    id: number,
    name: string,
    email: string,
    type: TYPE,
    age: number

}