import { Product } from "./Product";
 
export class Ticket extends Product {
    public origin : string;
    public destiny: string;

    constructor(origin:string, destiny:string, productId:string, productName: string,productDescription:string, productPrice:number ){

        super(productId,productName, productDescription,productPrice)

        this.origin = origin;
        this.destiny = destiny;
    }

    public getOrigin (){
        return this.origin;
    }

    public getDestiny(){
        return this
    }

    public getProductId (){
        return this.productId
    }

}