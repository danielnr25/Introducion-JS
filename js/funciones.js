function sumar(num1,num2){
   return num1+num2;
}

function restar(num1,num2){
   return num1-num2;
}

const saludo = "USO DE MODULOS EN JAVASCRIPT";

export default saludo;

export {
   sumar,
   restar
}