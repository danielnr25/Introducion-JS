// TIPO DE DATOS

//undefined: Nos indica que la varibale no tiene valor asignado o está sin definir,
//let cliente;
//console.log(typeof cliente);


// boolean: nos permite saber si una variable es verdadera o falsa.
//const logueado = false;
//console.log(typeof logueado);

// string: nos permite saber si una variable es de tipo texto.
//const producto = "Monitor de 24 pulgadas";
//const alumno = 'Norma';
//console.log(typeof producto);
//console.log(typeof alumno);

// number: nos permite saber si una variable es de tipo número, entero, decimal.
// const numero1 = 20.50;
// const numero2 = 20;
// const numero3 = -200;

// console.log(typeof numero1);
// console.log(typeof numero2);
// console.log(typeof numero3);

// null : es un tipo de dato especial que indica que la variable no tiene valor.
// const descuento = null;
// console.log(typeof descuento);

// symbol: es un valor primitivo único e inmutable y puede ser utilizado como clave de una propiedad de un objeto.

// const primerSymbol = Symbol(5);
// const segundoSymbol = Symbol(5);
// const numero1 = 20;
// const numero2 = 20;

// console.log(typeof primerSymbol);
// console.log(primerSymbol);
// console.log(segundoSymbol);
// console.log(numero1);
// console.log(numero2);
// console.log(numero1 === numero2);
// console.log(primerSymbol === segundoSymbol);

//object: es un tipo de dato que representa un valor en JavaScript. Un objeto es una colección de datos y/o funcionalidades.

// const alumnos = {}
// const numeros = [1,2,3,4,5];
// const descuento = null;
// console.log(typeof alumnos);
// console.log(typeof numeros);
// console.log(typeof descuento);

// begint: es un tipo de dato de numeros entereros de 64 bits, mayores a 2^53 - 1: (9007199254740991)

// const numeroGrande = BigInt(140);
// const numero2 = 50;
// console.log(numeroGrande);

// console.log(typeof numeroGrande);
// console.log(typeof numero2);
// console.log(Number(numeroGrande) + numero2); // para sumar un numero bigInt con un numero normal, se debe convertir el bigInt a numero con la funcion Number().

// char: es un tipo de dato que representa un solo caracter, pero en javascript no existe como tal, se puede usar un string de un solo caracter.
// const char = "a";
// console.log(typeof char);