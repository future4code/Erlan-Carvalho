# Exercícios sobre polimorfismo

## 1 .

### a) R - Consegui imprimir todas, menos o método. No método o que foi impresso foi a seguinte expressão: "[Function: calculateBill]". O valor não foi impresso, pelo fato dele precisar ser chamado fora do objeto da seguinte forma: "nomdeDoObjeto.metodo".

## 2 . 

### a) R - const place1 = new Place("4020000"). O typescript fala que não pode criar instâncias de classe abtratas.

### b) R - utilizando a instância de uma classe filha(sub-classe ) da classe abstrata place.

## 4. 

### a) R - possui 4 propriedades e 1 métodos herdados pela interface ""client"", além de possuir uma propriedade e métodos próprios (cpf do tipo string e seu getter "getCpf"). Possui também um constructor (que é o que vai ser cobrado ao ser criado uma nova instância desta classe ResidentialClients) herdado pela sua classe pai, a classe Residence que é classe filha da classe abstrata place, herdando assim sua propriedade ceo, além de também herdar as propriedades da interface client.

## s. 

### a) R - As classes pais dessas duas classes possui uma classe pai em comum que é a classe abstrata place. Além de também herdarem propriedades e métodos da interface client. E também possuem a características de possuírem uma propriedade e métodos que só pertecem a eles(cpf e getCpf no caso do residentialClient e cnpj e getCnpj no caso do commercialClient).

### b) R - Os dois possui classes pais diferentes, o que mudam seus conceitos, uma classe é pensada para o cliente residencial e a outra para o cliente comercial e por isso alguns fatores, mudam, como o método calcullateBill(calcular conta) que no ResidntialCliente multiplica-se a quantiadade de energia que o cliente consumiu por 0.75, e no CommerccialClient multtiplica-se a quantiade de energia que o cliente consumiu por 0.53.
  