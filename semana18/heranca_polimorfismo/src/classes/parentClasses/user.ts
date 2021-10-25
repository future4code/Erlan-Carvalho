export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;


    constructor(id: string, email: string, name: string, password: string) {
        console.log("Chamando o construtor da classe User")

        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId() {
        return this.id
    }
    public getEmail() {
        return this.email
    }
    public getName() {
        return this.name
    }
    // 5
    public introduceYourself(): string | void {
        console.log(`Olá, sou ${this.name}, bom dia!`)
    }


}