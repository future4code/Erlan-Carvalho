// // Exercícios de interpreteção de código 
// 1.
// o código realiza um loop que imprime no console 
// valores atée o número 4, pois a estrutura do loop 
// consiste em pegar uma variavel, e até ela ser menor que 4 
// a estrutura repete a instrução que é imprimir o valor, que começa
// valendo 0.

// 2.
// a) 
// no console será impresso todos elementos do array
//  que são maiores que 18.

// b)
// Sim, o for...of seria suficiente. A única coisa 
// que dveria ser mudada para se ter acesso a todos
// os elementos do array seria a instrunção de
// execução que vem dentro da condicional. Para se 
// ter acesso a todos os elementos do array, a
// instrução do loop poderia ser:
// for (let numero of lista){
//     if (numero >= 10){
//         console.log(numero)
//     }
// }

// 3.
// essse código apresenta um loop dentro de outro loop
// onde o primeiro loop define a primeira condição de repetição que
//  diz que se o número digitado pelo usuraio no prompt for maior que
// o numero definido pelo loop, o código passa para a váriavel linha
// até o número definido ser igual ao número digitado pelo usuário,
// assim terminando o while e passando para o for que possui uma
// condição de continuação  que só finaliza qundo a variavel 
// asteristicos é maior que a quantidade do número estabelicido da
// segunda variavel do código(que é 0) 
// e ação desse loop é imprimir no console 
// o loop em forma de asteriscos, ou seja, se o usuário digitar 4,
// o que será impresso no console, será 1 algarismo, seguido de 
// 2 algarismos, e assim por diante até chegar na quantidade digitada 
// que nesse caso foi 4.

//Exercícios de escrita de códigos

// 1.
// const pergunta = Number(prompt("Quantos bichos de estimação você tem?"))
// const perguntaBicho = pergunta 
// const bichos = []
// if (perguntaBicho === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }else  {
//     for (let i = 0; i < perguntaBicho; i++){
//       const nomeBichos = prompt("Digite o nome!", i )
//       bichos.push(nomeBichos)
//     }
//     console.log(bichos)
// }

// 2.
// const arrayOriginal = [10,25,30,40]
// const novoArray = []

// const impressao = () =>{
//   const impressaoDoArray = console.log(arrayOriginal)
//     return impressaoDoArray
// }
// impressao()

// for (let numeros of arrayOriginal ){
//     console.log(numeros / 10)
// }








  