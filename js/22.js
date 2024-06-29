const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = () =>{ // 
   fetch(url) // le pasamos la url de la api
   .then((respuesta) => respuesta.json()).then(
      resultado =>{
         console.log(resultado) // consultar la api
      }
   ).catch(error =>{
      console.log('Error de la api')
   }).finally( () =>{
      console.log('Todo conforme')
   })
}
consultarAPI();