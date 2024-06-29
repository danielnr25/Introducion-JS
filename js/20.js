const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',ev =>{
   ev.preventDefault();

   const nombre = document.querySelector('#nombre').value;
   const contra = document.querySelector('#password').value;
   // console.log('nombre',nombre);
   // console.log('contra',contra);

   const alertaPrevia = document.querySelector('.duplicado');
   alertaPrevia?.remove();
   // crear alerta 
   const alerta = document.createElement('DIV');
   alerta.textContent = 'Ambos campos son obligatorios';
   alerta.classList.add('alerta','duplicado');
   if(nombre=== '' || contra === ''){
      formulario.appendChild(alerta);

      setTimeout(() => {
         alerta.remove();
      }, 3000);

      return;
   }
   

})