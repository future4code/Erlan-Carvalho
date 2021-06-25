/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const mensagemDeIntroducao = console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   // const comprarCarta = (cartas, naipes) => {
   //    let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
   //    let tioNaipe = ["♦️", "♥️", "♣️", "♠️"]

   //    const carta = numeros[Math.floor(Math.random() * 13)]
   //    const naipe = tioNaipe[Math.floor(Math.random() * 4)]

      const baralhoUsuraio1 = comprarCarta()
      const baralhoUsuario2 = comprarCarta()
      const baralhoCompuatador = comprarCarta()
      const baralhoComputador2 = comprarCarta()
      
     const  baralhoUsuarioFinal =  baralhoUsuraio1.texto + baralhoUsuario2.texto 
     const baralhoFinalUsuarioValor =  baralhoUsuraio1.valor + baralhoUsuario2.valor
     console.log('Usuario cartas:' , baralhoUsuarioFinal, 'pontuação',baralhoFinalUsuarioValor )
     const baralhoComputadorFinal =  baralhoCompuatador.texto + baralhoComputador2.texto
     const baralhoFinalComputadorValor = baralhoCompuatador.valor + baralhoComputador2.valor
      console.log('Computador cartas' , baralhoComputadorFinal, 'Pontuação ',  baralhoFinalComputadorValor )
      

     if( baralhoUsuarioFinal > baralhoComputadorFinal &&  baralhoFinalUsuarioValor >baralhoFinalComputadorValor ){
        console.log('O usuário ganhou!')
     } 
     else if ( baralhoUsuarioFinal < baralhoComputadorFinal &&  baralhoFinalUsuarioValor < baralhoFinalComputadorValor ){
        console.log("O computador ganhou!")
     }
     else if(baralhoUsuarioFinal === baralhoComputadorFinal && baralhoFinalUsuarioValor === baralhoFinalComputadorValor )
         console.log("Empate!")
   }

//}
else {
   console.log("O jogo acabou")
}