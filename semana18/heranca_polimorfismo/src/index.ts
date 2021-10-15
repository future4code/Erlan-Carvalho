import { User } from "./classes/user";
import { Costumer } from "./classes/costumers";



const user1 = new User("001", "joca@gmail.com", "joca", "123456");
console.log(user1)

const user2 = new User("002", "boca@gmail.com", "boca", "123456")
console.log(user2)

// 1.

// a) R - Sim é possível ver a senha na instância tendo em vista que ela está no constructor.(this.password. Isso faz com q ela seja chamada assim qe uma instância for criada. E ao imprimir essa instãncia no console, todos os seus dados são impressos.)

// b) R - A mensagem "Chamando o construtor da classe User" aparece de forma proporcional à quantidade de vezes que  uma instância é criada, tendo em vista que pelo fato desta mensagem está num console.log dentro constructor, faz com esta seja impressa toda vez que uma nova instância seja criada.


const cliente1 = new Costumer("001", "marcos@gmail.com", "Marcos", "12345678", "25142355")
// 4. 
cliente1.introduceYourself()
console.log(cliente1)

const cliente2 = new Costumer("002", "Helena@gmai.com", "Helena", "234567", "154463454")
cliente2.introduceYourself()
console.log(cliente2)

// 2.

// a)  R - A mensagem "Chamando o construtor da classe Customer" foi impressa no terminal de forma proporcional a quantidade de instâncias(pois essa quantidade representa as vezes que o constructor é "invocado".)

// b) R - A mensagem "Chamando o construtor da classe User" foi impressa na mesma quantidade da frase "Chamando o construtor da classe Customer", pois a primeira fase citada faz parte do constuctor da classe pai, e pelo fato da classe filha possuir um super que referencia ao constructor da classe pai, toda vez que for criada uma instância baseada no constructor da classe filha, está também estará herdando o costructor da classe pai.

// 3.

// a)  R - Sim pelo fato da classe filha herdar as propriedades da classe pai que estão no presente no super, que faz referência direta ao constructor da classe pai, e como a propriedade, password está no constructor da classe pai, esta irá ser requisitada tambémm na classe filha, sendo impressa junta às demais propriedades. 



