// EXERCÍCIO 01
function inverteArray(array) {
  let arrayVazio = []
const finalDoArray = array.length-1
for(let i = finalDoArray; i >= 0;  i--){
arrayVazio.push(array[i])
}
return arrayVazio
}
console.log(inverteArray([1,2,3,4,5,6]))

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let array2 = []
for (let i = 0; i < array.length ; i++){
  if (array[i] % 2 === 0){
  array2.push(array[i] * array[i] )
  }
}
return array2
}


// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let array2 = []
  for (let i = 0; i< array.length; i++){
    if (array[i] % 2 === 0){
      array2.push(array[i])
    }
  }
return array2
}

// EXERCÍCIO 04

function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for (let numeros of array){
      if(maiorNumero < array[numeros]){
        maiorNumero = array[numeros]
      }
  }
return maiorNumero
}


// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length

}
console.log(retornaQuantidadeElementos([2,3,4,5]) )

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
return[false,false, true, true, true]
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const arrayDeNumerosPares = []
  for (let i = 0; arrayDeNumerosPares.length < n; i++){
  if(n % 2 === 0){
    arrayDeNumerosPares.push(n)
  }
}
  return arrayDeNumerosPares
}


// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c){
  return 'Equilátero'
  }else if (a === b && b != c){
    return 'Isósceles'
  }else {
    return 'Escaleno'
  } 
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
