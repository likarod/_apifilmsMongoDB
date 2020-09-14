/*
 ENRUTADO A form.pug 
 Evento para guardar los dato en el LocalStorage cada vez que se añada nuevos valores en el formulario. 
*/

let boton = document.getElementById("btnForm");
let arr = [];
if ( boton != null){
  boton.addEventListener("click", ()=> {
    let nuevaPeli= {
        "Titulo": document.getElementById("nombre").value,
        "Época": document.getElementById("epoca").value,
        "Género": document.getElementById("genero").value,
        "Director": document.getElementById("director").value,
        "Actores": document.getElementById("actors"),
        "Sinopsis": document.getElementById("sinopsis").value,
        "Idiomas": document.getElementById("idiomas").value,
        "Puntuacion": document.getElementById("puntuacion").value,
        "Produccion": document.getElementById("produccion").value
    }
    if (JSON.parse(localStorage.getItem("Peliculas")) === null) arr = [];
    else arr = JSON.parse(localStorage.getItem("Peliculas"));
    arr.push(nuevaPeli);
    localStorage.setItem("Peliculas", JSON.stringify(arr))
    
});

} 

/*
Se realiza un IF / ELSE para que no se carga el anterior evento cuando dicho botón no existe.
Se enruta a /films/"titulo de la API".
*/

else {
  let favorito = document.getElementById("btnFavorito");
   favorito.addEventListener("click", () => {
       let datos = document.getElementsByTagName("span");
       let nuevoFavorito = {
           "Titulo": datos[0].innerText,
            "Época": datos[1].innerText,
            "Género": datos[2].innerText,
            "Director": datos[3].innerText,
            "Actores": datos[4].innerText,
            "Sinopsis": datos[5].innerText,
            "Idiomas": datos[6].innerText,
            "Puntuacion": datos[7].innerText,
            "Produccion": datos[8].innerText,
            "Poster": document.getElementById("poster").src
        }
       console.log(nuevoFavorito)
       if (JSON.parse(localStorage.getItem("Peliculas")) === null) arr = [];
       else arr = JSON.parse(localStorage.getItem("Peliculas"));
       arr.push(nuevoFavorito);
       localStorage.setItem("Peliculas", JSON.stringify(arr))
       let urlNueva = "/"
       location.replace(urlNueva);
   })
}

