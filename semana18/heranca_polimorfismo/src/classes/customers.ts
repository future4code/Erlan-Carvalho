import { User } from "./parentClasses/user";

export class Customer extends User {


    private creditCardNumber: string;
    public purchaseTotalValue: number = 0;


    constructor(id: string, email: string, name: string, password: string, creditCardNumber: string) {

        super(id, email, name, password)
        console.log("Chamando o construtor da classe Customer")
        this.creditCardNumber = creditCardNumber

    }

    public getCreditCardNumber() {
        return this.creditCardNumber
    }

}