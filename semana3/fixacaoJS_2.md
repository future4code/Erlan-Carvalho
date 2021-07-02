function calculaPrecoTotal(quantidade) {
 const precoDaMacaSeMenosQueDuzia = 1.30
 const precoDaMacaSePeloMenosDuzia = 1 
   if (quantidade < 12){
   return (quantidade * precoDaMacaSeMenosQueDuzia)
 }else if (quantidade >= 12 ){
   return (quantidade * precoDaMacaSePeloMenosDuzia)
 }
}
