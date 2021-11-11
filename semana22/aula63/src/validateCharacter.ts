//exercício 1

import {CharacterInfo} from "../src/index"; 

export const validateCharacter = (input: CharacterInfo): boolean => {

    if (!input.name || !input.power || !input.defense || !input.life) {
        return false
    } else if (input.name.length < 0 || input.power < 0 || input.defense < 0 || input.life < 0) {
        return false
    } else {
        return true
    }

}


