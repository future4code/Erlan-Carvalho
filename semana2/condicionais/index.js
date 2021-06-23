// //Exercícios de Interpreteção de código 

// 1.
// a)
// O código roda uma condicional, que diz que se a
// primeira condição for true, então a primeira 
// instrunção (que é imrpimir no console: passou no
// teste) será realizada, mas se caso  a primeira
// condição for false, então, a segunda condição é 
// aborada e sua instrução executada(que é imprimir
// no console Não passou no teste.) 

// b)
// Devem ser números divisiveis por 2, ou seja números 
// parse.

// c) Devem ser números não dívisiveis por 2, ou seja 
// números ímpares. 

// 2.
// a)
// O código acima serve para digitar um item 
// (no caso uma fruta) no prompt, e dependedo 
// do que for digitado no prompt ele executa uma
// instrução, que vai ser imprimir no console uma
// mensagem depois da condicional que informa o preço 
// daquele determinado item digitado no prompt.

// b)
// O preço da fruta ,Maçã , é , R$ , 2.25

// c)
// O programa iria continuar a execução do programa
// e a mensagem impressa no cosole seria 
// O preço da fruta, Pêra, é, R$ , 5

// 3.
// a)
// a primeira linha do código pede para o usuário 
// digitar o primeiro númer através de um prompt.

// b)
// se um usuário digitar 10, então a condicional será
// true, o que consequentemente executará a instrução 
// de imprimir no console a mensagem: 
// Esse número passou no teste.Se o n´´umero digitado 
// fosse -10, nnada aconteceria, pois essa condicional não aborda 
// outras condicionais para realisar outras instruções
// caso a primeira condição seja falsa. Depois da 
// primeira instrunção, apenas possui uma variável que
// guarda uma string, que nada pode fazer. 

// c)
// sim, haverá um erro pois existe um console.log
// que está no escopo global pegando como elemento uma 
// variavel de um escopo filho(mais pecisamente 
// o escopo da condicional ). O console.log do final 
// do código não se´ra exibido no console do navageador
// pois seu elemento de exebição, está num escopo que
// ele não pode ter interações.

//Exercícios de escrita de código

// 1.
// const idadeUsuario =Number(prompt("Digite sua idade"))
//  const idade = idadeUsuario
     
//  if (idade >= 18){
//         console.log("Você pode dirigir")
//      }
//      else{
//          console.log("Você não pode dirigir")
//      }
 
// 2.
// const turno = prompt("Qual o seu turno? Digite M para matutino, V para vespertino e N para noturno")
   
//     if (turno === "M "){
//         console.log("Bom dia!")
//     }else if (turno === "V"){
//          console.log("Boa Tarde!")
//     }else if (turno === "N"){
//           console.log("Boa Noite!")
//     }

// 3. 
// const turno = prompt("Qual o seu turno? Digite M para matutino, V para vespertino e N para noturno")
   
//     switch(turno){
//         case 'M':
//         console.log("Bom Dia!")
//         break
//         case 'V':
//         console.log("Boa Tarde!")
//         break
//         case 'N':
//         console.log("Boa Noite!")
//         break
//      }

// 4.
// const filme = prompt("Qual o gênero do filme?")
// const ingresso = Number(prompt("Quanto custa o ingresso?"))

// if(filme === "fantasia" && ingresso < 15){
//     console.log("Bom filme!")
// }else{
//     console.log("Escolha outro filme :(")
// }




