// DESTRUCTURING DE 2 O MÁS OBJETOS: Se pueden extraer propiedades de 2 o más objetos y crear variables.

const producto = {
   nombre: "Monitor de 24 pulgadas",
   precio: 300,
   disponible: true,
}

const cliente={
   nombre: "Daniel",
   premiun:true
}

const {nombre:nombreProducto} = producto;
const {nombre:nombreCliente } = cliente;
console.log(nombreProducto);
console.log(nombreCliente);
