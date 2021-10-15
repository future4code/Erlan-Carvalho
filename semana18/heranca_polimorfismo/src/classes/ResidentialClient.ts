import { Residence } from "./Residence"
import { Client } from "../interfaces/client";

export class ResidentialClient extends Residence implements Client {

    public name: string;
    public registrationNumber: number;
    public consumedEnergy: number;
    private cpf: string

    constructor(residentsQuantity: number, cep: string, cpf: string, name: string, registrationNumber: number, consumedEnergy: number) {
        super(residentsQuantity, cep)
        this.cpf = cpf
        this.name = name
        this.registrationNumber = registrationNumber
        this.consumedEnergy = consumedEnergy

    }

    public getCpf() {
        return this.cpf
    }
    public calculateBill(): number | void {
        return this.consumedEnergy * 0.75
    }



}