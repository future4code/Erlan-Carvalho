import { CharacterInfo } from ".";
import { validateCharacter } from "./validateCharacter";

// export const performAttack = (attacker:CharacterInfo, defender:CharacterInfo)=>{

//     //a)

//     if(!validateCharacter(attacker) || !validateCharacter(defender)){
//         throw new Error("Invalid Character") 
//     }

//     if (attacker.power > defender.defense) {
//         defender.life -= attacker.power - defender.defense;
//       }

// }

export const performAttack = (attacker: CharacterInfo, defender: CharacterInfo, validator: (input: CharacterInfo) => boolean) => {

    //b)

    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid Character")
    }

    if (attacker.power > defender.defense) {
        defender.life -= attacker.power - defender.defense;
    }

}