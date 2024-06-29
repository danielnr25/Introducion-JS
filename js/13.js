// array methods: includes, findIndex,some,find,every

// includes: Verificar si un elemento existe en un arreglo y devuelve un booleano (true o false).

const tecnologias = ['JavaScript', 'Java', 'Python', 'C#', 'PHP', 'Ruby', 'C++', 'Swift', 'Kotlin', 'Go'];
const numeros = [1,2,3,4,5,6,7,8,9,10];	

// let resultado = tecnologias.includes('C');
// console.log(resultado);


// findIndex: Devuelve el índice del primer elemento que cumple con la condición dada en una función.
// let resultado = tecnologias.findIndex(index => index === 'Java');
// console.log(resultado);

// some: Verifica si al menos un elemento cumple con la condición dada en una función.

let resultado2 = numeros.some(numero => numero>9);
console.log(resultado2);

//find: devolver el primer elemento que cumple con la condición dada en una función.

// let resultado = tecnologias.find(index => index === 'JavaScript');
// console.log(resultado);

// every: verificar si todos los elementos cumplen con la condición y devuelve un booleano. (true o false)

let resultado = numeros.every(num =>num>9);
console.log(resultado);
