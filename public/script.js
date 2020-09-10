/* Enrutado a home.pug
Evento para buscar películas y enrutar a otra página.
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
Función para mostrar las películas guardadas. Sólo se puede interactuar con el LocalStorage a través del Front. A raíz de ello, se realiza los eventos en el script. 
*/

function leerPeliculas (){
    let dataPeli = JSON.parse(localStorage.getItem("Peliculas"));
    console.log(dataPeli);
    for(let i = 0; i < dataPeli.length; i++) {
      let info = `<div> PELÍCULA ${i+1}
      <br>
      <p class="dataName"> Titulo: ${dataPeli[i].Titulo}</p>
      <p class="dataDirector"> Director: ${dataPeli[i].Director}</p>
      <input type="button" id="${i}" value="Borrar">
      </div>`
      document.getElementById("informacion").innerHTML += info + "\n"; 
      
      document.getElementById(`${i}`).onclick = () => {
        //   let borrar = JSON.parse(localStorage.getItem("Peliculas"));  
        //   borrar.pop(i)
        console.log("Hola")
      }
    
    }
    
    for(let i = 0; i < dataPeli.length; i++) {
    document.getElementById(`${i}`).onclick = () => {
        //   let borrar = JSON.parse(localStorage.getItem("Peliculas"));  
        //   borrar.pop(i)
        console.log("Hola")
      } 
    }
    
}
leerPeliculas();

