//operador: AND(&&) y OR(||)

const disponible = 1000;
const total = 500;
const tarjeta = true;

// if(tarjeta){
//    console.log('Si se puede pagar')
// }else if(disponible > total){
//    console.log('Si se puede pagar la cuenta')
// }else{
//    console.log('No se puede pagar la cuenta')
// }

if(tarjeta && disponible>total){
   console.log('Si se puede pagar')
}else{
   console.log('No se puede pagar la cuenta')
}
