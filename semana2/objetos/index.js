// Exercícios de interpretação 
// 1.
// a)
// Matheus Nachtergaele
 
// Virginia Cavendish, 3

// canal: Globo, horário: 14h

// 2.
// a)nome: Juca
//   idade: 3
//   raca: SRD

//   nome : Juba
//   iddae: 3
//   raca: SRD

//   nome: Jubo
//   idade: 3
//   raca: SRD

//   b)o
//   a sintaxe dos três pontos serve para fazer a cópia de um objeto para outro objeto, e possibilita a troca ou mudanças nas propriedades do objeto copiado.

// 3.
// a) 
//   false
//   undefined 

// b)
//      O primeiro console.log imprimirá no console false pelo
//      fato de que a função tem como parametros o objeto e
//      propriedade deste objeto, com retorno sendo um array de objeto
//      como propriedade como elemento,, logo o que será    
//      impresso vai ser a propriedade pedida no console.log 
//      que é backender, que no objeto é false.
//      Já  o segundo console imprimirá undefined tendo
//      em vista que a propriedade altura não foi defnida no 
//      objeto que é um dos parâmetros da função.

//Exercícios de escrita de código

1.
// a)
// const pessoa ={
//    nome: "João", 
//   apelidos: ["jão", "jãozin", "jon"] 
   
// }
// const imprimePessoa = (pessoa) => {
//     console.log (`Eu sou ${pessoa.nome}, mas pode me chamar
//      de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
//     }
//     imprimePessoa(pessoa)
  

// b)
// const pessoaNovosApelidos = { ...pessoa,
//     apelidos:["jonjon", "joe", "juca"]
// }
// imprimePessoa(pessoaNovosApelidos)

// //2.
// //a)
// const identificacao1 = {
//     nome: "João" ,
//     idade: 20 ,
//     profissao: "Engenheiro civil"
// }
// const identificacao2 = {
//     nome:"Mateus ",
//     idade:25,
//     profissao:"Arquiteto"
// }
// //b)
// const indetificacoes = (identificacao1, identificacao2) => {
//    const identificacoesFinal = [identificacao1.nome,
//      identificacao1.nome.length,
//     identificacao1.idade, identificacao1.profissao,
//     identificacao1.profissao.length, 
//     identificacao2.nome, 
//     identificacao2.nome.length,
//    identificacao2.idade, identificacao2.profissao,
//    identificacao2.profissao.length]

//    return identificacoesFinal
// }
// console.log(indetificacoes(identificacao1, identificacao2))

// 3.
// //a)
// const carrinho = []


// //b)
// const fruta1 = {
//     nome: "melao",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "maçã",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "uva",
//     disponibilidade: true
// }
// //c)
// const adicaoAoCarrinho = (fruta1, fruta2,fruta3)=>{
//     carrinho.push(fruta1, fruta2, fruta3)
    
// }
// //d)
// adicaoAoCarrinho(fruta1, fruta2, fruta3)
// console.log(carrinho)
