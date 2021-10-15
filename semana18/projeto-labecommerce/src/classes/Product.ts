export class Product {
    protected productId: string;
    public productName: string;
    public productDescription: string;
    public productPrice: number;

    constructor(productId: string, productName: string, productDescription: string, productPrice: number) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
    }

    public getProductId(){
        return this.productId
    }
}