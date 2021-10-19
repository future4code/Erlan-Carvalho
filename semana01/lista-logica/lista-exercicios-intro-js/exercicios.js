// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
 const altura = Number(prompt("Digite aqui a altura!"))
 const largura = Number(prompt("Digite aqui a largura!"))
 const area = altura * largura
 console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
 const anoAtual = Number(prompt("Digite aqui o ano atual!"))
 const anoDeNascimento = Number(prompt("Digite aqui o seu ano de nascimento!"))
 const idadeDoUsuario = anoAtual - anoDeNascimento
 console.log(idadeDoUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const IMC = peso / (altura* altura) 
  return IMC 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt ("Digite seu nome!")
  const idade = prompt("Digite sua idade!")
  const email = prompt("Digite seu email!")
 const informacoesDoUsuario = console.log( `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite sua primeira cor favorita!") 
  const cor2 = prompt("Digite sua segunda cor favorita!")
  const cor3 = prompt("Digite sua terceira cor favorita!")
  const coresFavoritas = console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 const pNaoDarPrejuizo  = custo / valorIngresso
  return pNaoDarPrejuizo 
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const str1 = string1.length
  const str2 = string2.length 
  const comparacaoDeTamanho = str1 === str2 
  return comparacaoDeTamanho 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const lista = array[0]
  return lista
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const lista = array.pop()
  return lista
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const elemento1 = array[0]
  const ultimoElemento = array[array.length -1]
   array[0]= ultimoElemento
   array[array.length -1] = elemento1
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const frase = string1.toLowerCase().toUpperCase()
  const frase2 = string2.toLowerCase().toUpperCase()
  return frase.includes(frase2)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual!"))
  const anoNascimentoDeAlguem = Number(prompt("Digite o ano de nascimento de uma pessoa!"))
  const anoDeEmissaoRG = Number(prompt("Digite o ano em que o RG dessa pessoa foi emitido!"))
  const idade = anoAtual - anoNascimentoDeAlguem 
  const renovacao = anoAtual - anoDeEmissaoRG
   const criterio1 =  (idade <= 20 && renovacao >= 5) 
   const criterio2 = (20 <= idade && idade <= 50 && renovacao >= 10)
   const criterio3 =( idade > 50 && renovacao >= 15)
    const saberSeDeveRenovarRG = (criterio1 || criterio2 || criterio3)
  console.log(saberSeDeveRenovarRG)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const paraSerBissexto1 = ano % 400 === 0
  const paraSerBissexto2 = ano % 4 === 0 && ano % 100 !== 0
  return paraSerBissexto1 || paraSerBissexto2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const condicao1 = prompt("vocÊ tem mais de 18 anos")
  const condicao2 = prompt("Você possui o ensino médico completo?")
  const condicao3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
    const condicaoTotal=  condicao1=== "sim" && condicao2 === "sim" && condicao3 === "sim"
  console.log(condicaoTotal)
  }