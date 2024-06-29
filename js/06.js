// MANIPULACION DE OBJETOS: Los objetos son mutables, es decir que pueden ser modificados, se pueden agregar y eliminar propiedades.

const persona = {
   nombre : 'Daniel',
   edad : 23,
   profesion : 'Desarrollador Web',
   email : 'daniel@gmail.com',
}

//Object.freeze(persona); // Congela el objeto, no se pueden agregar, eliminar o modificar propiedades.

//Object.seal(persona); // Sella el objeto, no se pueden agregar o eliminar propiedades, pero si se pueden modificar.

persona.nombre = 'Diego'
persona.imagen = 'imagen.jpg'
delete persona.email;
//console.table(persona); // Muestra el objeto en forma de tabla.