//exercício 2 

import { validateCharacter } from "../src/validateCharacter";

describe("ValidateCharacter Tests", () => {

    //a)
    test("Verificação do código com personagem com nome vazio", () => {
        expect(validateCharacter({ name: "", power: 500, defense: 500, life: 1500 })).toEqual(false);
    });

    //b)
    test("Verificação do código com personagem com a vida = 0 ", () => {
        expect(validateCharacter({ name: "Ryu", power: 600, defense: 500, life: 0 })).toEqual(false);
    });

    //c)
    test("Verificação do código com personagem com força = 0", () => {
        expect(validateCharacter({ name: "Ken", power: 0, defense: 500, life: 1500 })).toEqual(false);
    });

    //d)
    test("Verificação do código com personagem com defesa = 0", () => {
        expect(validateCharacter({ name: "M. Bison", power: 800, defense: 0, life: 1500 })).toEqual(false);
    });

    //e)
    test("Verificação do código com personagem com defesa ou força ou vida < 0", () => {
        expect(validateCharacter({ name: "Akuma", power: 1200, defense: -300, life: 1500 })).toEqual(false);
    });

    //f)
    test("Verificação do código com personagem com informações válidas", () => {
        expect(validateCharacter({ name: "Goku", power: 8001, defense: 1000, life: 10 })).toEqual(true);
    });

});