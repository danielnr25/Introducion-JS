// MANIPULACION DE LOS ARREGLOS: Los arreglos son mutables, es decir que pueden ser modificados, se pueden agregar y eliminar elementos.


const tecnologias = ['HTML', 'CSS', 'JavaScript','Node.js',30,true];

//push: Agrega un elemento al final del arreglo.
//tecnologias.push('Vue.js');

//unshift: Agregar un elemento al incio de nuestro arreglo.
//tecnologias.unshift('Vue.js');

//pop: nos sirve para eliminar el ultimo elemento de nuestro arreglo.
//tecnologias.pop();

//shift: Elimina el primer elemento de nuestro arreglo.
//tecnologias.shift();

//splice: Elimina un elemento en una posicion especifica de nuestro arreglo,
//splice(posicion, cantidad de elementos a eliminar);
//tecnologias.splice(2,3)

// filter nos permite filtrar elementos de un arreglo. y nos devuelve un nuevo arreglo.
const tecnologias2 = tecnologias.filter(function(index){
   return index !== 'HTML';
});


console.log(tecnologias2);