class SystemUser {
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

}

const user1 = new SystemUser ("001", "joca@gmail.com", "joca", "123456")
console.log(user1)

const user2 = new SystemUser("002", "boca@gmail.com", "boca", "123456")
console.log(user2)

// 1.
 
// a) R - Sim é possível ver a senha na instância tendo em vista que ela está no constructor.(this.password. Isso faz com q ela seja chamada assim qe uma instância for criada. E ao imprimir essa instãncia no console, todos os seus dados são impressos.)

// b) R - A mensagem "Chamando o construtor da classe User" aparece de forma proporcional à quantidade de vezes que  uma instância é criada, tendo em vista que pelo fato desta mensagem está num console.log dentro constructor, faz com esta seja impressa toda vez que uma nova instância seja criada.
