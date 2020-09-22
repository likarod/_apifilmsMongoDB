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

function detalleBBDD (Titulo) {
  let urlDetalle = `/films/detalle/${Titulo}`
  location.replace(urlDetalle);
}

//Función para el botón Borrar.
function borrarBBDD (Titulo) {
  borrarPeli = {
      "Titulo": Titulo,
  }

  fetch('/films/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'},
    body:JSON.stringify(borrarPeli)
      })
    .then((respuesta)=>{
      console.log("Se ha borrado con éxito")
      console.log(respuesta)
      location.replace("/")
      })
    .catch((e)=>{
      console.log("error"+e)
      });

} 

//Función para el botor Editar.

function editarBBDD (Titulo) {
  let urlDetalle = `/films/edit/${Titulo}`
  location.replace(urlDetalle);
}
      // let botonEdicion = document.getElementById(`editar${i}`)
      // botonEdicion.addEventListener("click", () =>{
      //   //http://localhost:3000/edit/0?Titulo=Titanic&Genre=drama
      //   let urlEdicion = `/films/edit/${dataPeli[i].Titulo}`
      //   location.replace(urlEdicion);
      // }) 