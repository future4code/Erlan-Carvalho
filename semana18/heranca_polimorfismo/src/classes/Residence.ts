import { Place } from "./parentClasses/place";


export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}