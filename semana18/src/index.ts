//Exercício 1 

// a) O constructor está presente de todas as classes, naõ mportando se ele foi declarado ou não. Mas se o  constructor for delcarado, ele serve como uma função invocável. Nós podemos chamá-lo pelo parâmnetro das instâncias que formos criar a partir da classe.

//b)

 type Transaction ={
   array:[]
 }
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

  const getUserAccount = new UserAccount ("255.025.888-44", "José", 30)
  //R - A mensagem "Chamando o construtor da classe User" foi impressa no terminal apenas 1 vez. 

  // c) Criando funções que funcionem como seus getters. Ao utilizar essas funções fora do escopo da classe conseguimos acesso à propriedades privadas.
   