export class User {
    public name: string;
    public email: string;
    protected id: number = Date.now()

    constructor(name: string, email: string, id: number) {

        this.name = name;
        this.email = email;
        this.id = id;
    
    }

    public setId (){
        return this.id.toString()
    }

    public getId(){
        return this.setId()
    }
}