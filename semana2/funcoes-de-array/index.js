// Exercícios de interpretação de código 

// 1.
// a) vai retornar o seguinte array:

// [0 nome: Amanda Rangel, apelido: Mandi 
//  [{ nome: "Amanda Rangel", apelido: "Mandi" },
//  { nome: "Laís Petra", apelido: "Laura" },
//  { nome: "Letícia Chijo", apelido: "Chijo" }]
// 1 nome: Laís Petra, apelido: Laura 
//  [{ nome: "Amanda Rangel", apelido: "Mandi" },
//  { nome: "Laís Petra", apelido: "Laura" },
//  { nome: "Letícia Chijo", apelido: "Chijo" }]
// 2 nome: Letícia Chijo, apelido: Chijo
//  [{ nome: "Amanda Rangel", apelido: "Mandi" },
//  { nome: "Laís Petra", apelido: "Laura" },
//  { nome: "Letícia Chijo", apelido: "Chijo" }]]

// 2.
// a) 
// Será impresso o seguinte array:

//[nome: Amanda Rangel ,
//  nome: Laís Petra,
//  nome: Letícia Chijo]

// 3.
// a)
//Será impresso o seguinte array:

//[apelido: Mandi,
// apelido: Laura]

//Exercícios de escrita de código

1.
//a)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ] 

//  const apenasNomes = pets.map((item) =>{
//    return item.nome 
//  })
//  console.log(apenasNomes)

//b)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha" },
//     { nome: "Polly", raca: "Lhasa Apso" },
//     { nome: "Madame", raca: "Poodle" },
//     { nome: "Quentinho", raca: "Salsicha" },
//     { nome: "Fluffy", raca: "Poodle" },
//     { nome: "Caramelo", raca: "Vira-lata" },
// ]

// const apenasRacaSalsicha = pets.filter((racaDeDog) => {
//     return racaDeDog.raca === "Salsicha"
// })
// console.log(apenasRacaSalsicha)

//c)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ] 

// const paraDonosDePoodle = pets.filter((poodle)=>{
// if(poodle.raca === "Poodle"){
//     console.log(`Você ganhou um cupom de desconto de
// 10% para tosar o/a ${poodle.nome}`)
//     return true
// }else  {
//     return false

//       } 
//  })
// console.log(paraDonosDePoodle)

2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a)
const apeanasNomes = produtos.map((elemento) =>{
    return elemento.nome
})
console.log(apeanasNomes)

//b)



