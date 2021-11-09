
//exercício 1 

interface CharacterInfo {
    name: string,
    power: number,
    defense: number,
    life: number
}

export const validateCharacter = (input: CharacterInfo): boolean => {

    if (!input.name || !input.power || !input.defense || !input.life) {
        return false
    } else if (input.name.length < 0 || input.power < 0 || input.defense < 0 || input.life < 0) {
        return false
    } else {
        return true
    }

}

//exercício 2 



