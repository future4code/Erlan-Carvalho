// a)
//R-  A entrada é o parâmetro da função, que  é descrito como números. A saída vai ser um objeto contendo o maior elemento dos números digitados na entrada, o menor, e a média  .

function obterEstatisticas(numeros:number[]):{ maior:number, menor:number, media:number } {
 
    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b) 
// R- As variáveis que compõem a função são as do tipo array e number.

// c)

type amostrDeDados  = {
    numeros:number[],
    obterEstatisticas: (numeros: number[]) => number[]
}
