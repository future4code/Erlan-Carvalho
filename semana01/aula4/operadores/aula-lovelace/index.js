/*Exercícios de interpretação de código 
Questão 1.
Resposta -  a. false
            b. false
            c. true
            d. boolean 
            
Questão 2. e Questão 3.
Resposta -  O problema no código dele é que o prompt só imprime string, e ele quer fazer uma operação artimética(soma) o que não da para fazer com strings, então para corigir isso ele deve converter as suas strings em numbers. ficaria 
            da seguinte forma: let primeiroNumero - Numeber(prompt("Digite um numero!"))
                               let segundoNumero = Number (prompt ("Digite outro numero!"))
                               
                               const soma = primeiroNumero + segundoNumero

                               console.log(soma)*/

//Exercícios de escrita de código

/*1.
const idade1 = Number(prompt("Quantos anos você tem?"))
const idadeAmigo = Number (prompt("Quanto anos tem seu melhor amigo(a)"))

console.log("A sua idade é maior que a do seu amigo?", idade1 > idadeAmigo)
console.log("A diferença da idade vocês é:", "de", idade1 - idadeAmigo, "anos" )*/

/*2.
const num1 = Number(prompt("Insira um numero par"))
console.log (num1%2)
// todo número par divido por 2 tem resto 0
//se for inserido um úmero impar o resto é igual a 1. */

/*3.
const idade = Number(prompt("Quantos anos você tem?"))
const idadeEmMeses = idade * 12
console.log(idadeEmMeses)

const idadeEmDias = idade * 365
console.log(idadeEmDias)

const idadeEmHoras = idade *(24*365)
console.log(idadeEmHoras)*/

/*4.
const num1 = 
Number(prompt("Digite um número!"))
const num2 = 
Number(prompt("Digite outro número!"))

console.log("O primeiro número é maior que o segundo?",num1 > num2)
console.log("O primeiro número é igual o segundo?", num1 === num2)
console.log("O primeiro númrero é divisível pelo segundo?", num1 % num2 === 0)
console.log("O segundo número é divisível pelo primeiro?", num2 % num1 === 0 )*/