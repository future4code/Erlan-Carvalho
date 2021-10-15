import { Commerce } from "./Commerce";
import { Client } from "../interfaces/client";

export class CommercialClient extends Commerce implements Client {

    private cnpj: string;
    public name: string;;
    public registrationNumber: number;
    public consumedEnergy: number;

    constructor(cnpj: string, name: string, registrationNumber: number, consumedEnergy: number, cep: string, floorsQuantity: number) {

        super(floorsQuantity, cep)

        this.cnpj = cnpj;
        this.name = name;
        this.consumedEnergy = consumedEnergy;
        this.registrationNumber = registrationNumber

    }
    public getCnpj() {
        return this.cnpj
    }

    calculateBill(): number | void {
        return this.consumedEnergy * 0.53
    }
    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }

}