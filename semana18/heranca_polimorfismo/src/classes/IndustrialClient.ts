import { Industry } from "./Industry";
import { Client } from "../interfaces/client";

export class IndustrialClient extends Industry implements Client {

    private industrialRegister: string;
    public name: string;
    public registrationNumber: number;
    public consumedEnergy: number;

    constructor(machinesQuantity: number, cep: string, industrialRegister:string, name: string, registrationNumber: number, consumedEnergy: number) {

        super(machinesQuantity, cep)

        this.industrialRegister = industrialRegister
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;

    }

    public calculateBill(): number|void{
        return this.consumedEnergy 
    }


    public getIndustrialRegister():string{
        return this.industrialRegister
    }



}