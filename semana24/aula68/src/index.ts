//exercício 1

// 1º passo- Fazer ums operação para adcionar um caractere ao final de uma string , remover um caractere do final dele ou substituir, se em uma dessas operações  houver uma string que resulta apenas de uma das 3 citadas anteriores ela é uma one edit

//2º passo -  exemplos
// falando ---- falandos === oneedit
//   falando ---- faland === oneedit
//   falando ---- pfalando ==== não é oneedit


// 3º passo -  código força bruta
//usar métodos de string como splice,pop e if e elses para validar 

//4ª passo - otimizar
// crriar função com input para inserir string, e fazer as validações para ver se as strings são oneedit.

// 5º passo

// 6º passo -implemetação
function checkIfItIsOneEdit(string: string, string2: string): boolean {
    if (Math.abs(string.length - string2.length) > 1) return false

    if (string.length > string2.length) return string.includes(string2)
    if (string2.length > string.length) return string2.includes(string)


    let charsDiffCount = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string2[i]) charsDiffCount++
    }

    return charsDiffCount === 1
}

console.log(checkIfItIsOneEdit("hoje", "hoj"))
console.log(checkIfItIsOneEdit("hoje", "hojeo"))
console.log(checkIfItIsOneEdit("hoje", "phojeo"))

//exercício 2
