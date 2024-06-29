// FUNCIONES EN JAVASCRIPT: Son bloques de código que se pueden reutilizar en cualquier parte de nuestro proyecto y nos permiten ejecutar una acción en particular.

//sumar();
// funcion declarativas: Nos permiten definir una función y luego llamarla en cualquier parte de nuestro código.

// function sumar(){
//    console.log(2+2);
// }

function sumar(numero1= 0, numero2=0){
   console.log(numero1 + numero2);
}
// una funcion con parametros es una funcion que recibe valores para ejecutar una accion en particular.De lo contrario nos arroja un NaN (Not a Number)
sumar(); // si no le pasamos valores a la funcion, esta toma los valores por defecto que le asignamos en la funcion.
sumar(5,20);
sumar(25,20);
sumar(10,40);
