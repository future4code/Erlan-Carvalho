// a)
const minhaString : string = "olá";

//R- tentar atribuir um número a uma variável que foi tipada como string faz com que o typescript de erro.

// b)
const meuNumero : number|string = 20;

//R- para que essa variaveel aceite outro tipo de valor devemos  declar que essa variável possui um unionType (ou seja vários tipos podem ser atribuidos) utilizamos o sinal '|' para isso. 

//c) & d)

enum rainbow  {
    AMARELO = "amarelo",
    VERMELHO = 'vermelho',  
    LARANJA = 'laranja',
    VIOLETA = 'violeta',
    ANIL = 'anil',
    AZUL = 'azul',
    VERDE = 'verde'
}

const pessoaA :{nome:string, idade:number, corFavorita: rainbow} =
{
    nome:"carlos",
    idade:20,
    corFavorita: rainbow.ANIL
};

 type tipoPessoa ={nome:string, idade:number, corFavorita:rainbow};

const pessoaB : tipoPessoa = {
    nome:"José",
    idade:22,
    corFavorita:rainbow.AZUL
};

const pessoaC : tipoPessoa = {
    nome:"Maria",
    idade:25,
    corFavorita:rainbow.AMARELO
};

const pessoaD : tipoPessoa = {
    nome:"Antônio",
    idade:30,
    corFavorita: rainbow.VERDE
}





