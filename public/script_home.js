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
Función para mostrar las películas guardadas. 
Sólo se puede interactuar con el LocalStorage a través del Front. 
A raíz de ello, se realiza los eventos en el script. 
*/

function leerPeliculas (){
    let dataPeli = JSON.parse(localStorage.getItem("Peliculas"));
    console.log(dataPeli);
    for(let i = 0; i < dataPeli.length; i++) {
      let info = `<br>
      <section class="lista_cartas"> 
        <article class="cartas">
          <header class="cabecera_cartas">
            <h2> PELÍCULA ${i+1} 
          </header>
          <p class="dataName"> Titulo: ${dataPeli[i].Titulo}</p>
          <p class="dataYear"> Año de la película: ${dataPeli[i].Época}</p>
          <p class="dataGenre"> Género de la película: ${dataPeli[i].Género}</p>
          <p class="dataDirector"> Director: ${dataPeli[i].Director}</p>
          <img class="dataPoster" src=${dataPeli[i].Poster}>
        </article>
        <input type="button" id="borrar${i}" value="Borrar">
        <input type="button" id="editar${i}" value="Editar">
        <input type="button" id="detalles${i}" value="Detalles">
      </section>`
      document.getElementById("informacion").innerHTML += info + "\n"; 
    }
    
    for(let i = 0; i < dataPeli.length; i++) { 
      // BOTON PARA BORRAR
      document.getElementById(`borrar${i}`).onclick = () => {
      let borrar = JSON.parse(localStorage.getItem("Peliculas")); 
      borrar.splice(i, 1);
      console.log(borrar)
      console.log("Se ha borrado el registo" + i);
      localStorage.setItem("Peliculas", JSON.stringify(borrar))
      let url = "/"
      location.replace (url)
       
      }  

      //BOTON PARA EDITAR.
      let botonEdicion = document.getElementById(`editar${i}`)
      botonEdicion.addEventListener("click", () =>{
        //http://localhost:3000/edit/0?Titulo=Titanic&Genre=drama
        let urlEdicion = `/films/edit/${dataPeli[i].Titulo}`
        location.replace(urlEdicion);
      }) 
      
      //BOTON DETALLE.
      let botonDetalle = document.getElementById(`detalles${i}`)
      botonDetalle.addEventListener("click", () => {
        let detalle = JSON.parse(localStorage.getItem("Peliculas"));
        console.log(detalle);
        let urlDetalle = `/films/detalle/${i}?Titulo=${detalle[i].Titulo}&Year=${detalle[i].Época}&Genre= ${detalle[i].Género}&Director=${detalle[i].Director}&Actors=${detalle[i].Actores}&Sinopsis=${detalle[i].Sinopsis}&Idiomas=${detalle[i].Idiomas}&Puntuacion=${detalle[i].Puntuacion}&Produccion=${detalle[i].Produccion}&Poster=${detalle[i].Poster}`
        location.replace(urlDetalle);
      })
    } 
 }

leerPeliculas();