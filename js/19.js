// EVENTOS 
const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

heading.addEventListener('dblclick',()=>{
   const numero = 10;
   if(numero === 10){
      heading.textContent = 'El numero es 10';
   }else{   
      heading.textContent = 'El numero no es 10';
   }
});
enlaces.forEach(enlace =>{
   enlace.addEventListener('click', (ev) =>{
      ev.preventDefault(); //evita que se ejecute el evento por defecto
      console.log(ev.target.textContent)
      console.log('click en el enlace')
   });
}
);