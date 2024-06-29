// Iteradores en JS: Nos permiten recorrer una estructura de datos, como un array, un string, un objeto, etc, y ejecutar una acción por cada elemento que recorremos.

const tecnologias = ['JavaScript', 'Java', 'Python', 'C#', 'PHP', 'Ruby', 'C++', 'Swift', 'Kotlin', 'Go'];

//forEach: Nos permite recorrer un arreglo y ejecutar una acción por cada elemento que recorremos.

//console.log(tecnologias);

const arrayForEach = tecnologias.forEach(function(index,element){
   console.log(index,element);
   //return index; //NO NOS DEVUELVE NADA 
});

//map: Nos permite recorrer un arreglo y ejecutar una acción por cada elemento que recorremos, y nos devuelve un nuevo arreglo con los resultados.

const arrayMap = tecnologias.map(function (tech){
   console.log(tech)
   return tech; // generamos un nuevo arreglo con los elementos del arreglo original
});

// DIFERENCIAS ENTRE MAP Y FOREACH, MAP NOS DEVUELVE UN NUEVO ARREGLO Y FOREACH NO NOS DEVUELVE NADA. 
console.log(arrayMap);
console.log(arrayForEach); 