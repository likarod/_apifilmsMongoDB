/* 
Enrutado a home.pug
Evento para buscar películas desde la API y enrutarla (reemplazarla) a otra página.
*/
let pelis = document.getElementById("tomarValor");
pelis.addEventListener("click", ()=> {
    let inputPelis = document.getElementById("inputTitulos").value;
    console.log(inputPelis)
    let urlNueva="/films/" +inputPelis
    console.log(urlNueva)
    location.replace (urlNueva)})


/*
Enrutado a home.pug.
Función para redireccionar al Peliculas.pug para mostar los detalles.
*/

function redireccionarDetalle (index) {
  let urlDetalle = `/films/detalle/${index}`
  location.replace(urlDetalle);
}

function redireccionarBorrar () {
  let datos = document.getElementsByTagName("span");
  borrarPeli = {
      "Titulo": datos[0].innerText,
      "Epoca": datos[1].innerText,
      "Genero": datos[2].innerText,
      "Director": datos[3].innerText,
      "Poster": document.getElementById("poster").src
  }

  /*
  "Actores": datos[4].innerText,
  "Sinopsis": datos[5].innerText,
  "Idiomas": datos[6].innerText,
  "Puntuacion": datos[7].innerText,
  "Produccion": datos[8].innerText,
  */

  fetch('/films/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'},
    body:JSON.stringify(borrarPeli)
      })
    .then((respuesta)=>{
      console.log("Se ha borrado con éxito")
      console.log(respuesta)
      })
    .catch((e)=>{
      console.log("error"+e)
      });

} 

//       //BOTON PARA EDITAR.
//       let botonEdicion = document.getElementById(`editar${i}`)
//       botonEdicion.addEventListener("click", () =>{
//         //http://localhost:3000/edit/0?Titulo=Titanic&Genre=drama
//         let urlEdicion = `/films/edit/${dataPeli[i].Titulo}`
//         location.replace(urlEdicion);
//       }) 