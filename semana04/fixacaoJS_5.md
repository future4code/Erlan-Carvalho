function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
      const apenasNomeAnimais= animais.map ((nomes)=>{
        return nomes.nome
     })
     return apenasNomeAnimais
}
console.log(criarArrayNomesAnimais())

