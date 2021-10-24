import { connection } from "../data/connection";

export const insertUsersIntoDB = (id: string, name: string, nickname: string, email: string, address: string) => {
    connection()
        .insert(
            {
                id,
                name,
                nickname,
                email,
                address
            })
        .into("aula51_users")
}