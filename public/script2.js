/*
 ENRUTADO A form.pug 
 Evento para guardar los dato en el LocalStorage cada vez que se añada nuevos valores en el formulario. 
*/

let boton = document.getElementById("btnForm");
let arr = [];
if ( boton != null){
  boton.addEventListener("click", ()=> {
    let nuevaPeli= {
        "Titulo":document.getElementById("nombre").value,
        "Director":document.getElementById("director").value,
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
            "Actores": datos[4].innerText
        }
       console.log(nuevoFavorito)
       if (JSON.parse(localStorage.getItem("Peliculas")) === null) arr = [];
       else arr = JSON.parse(localStorage.getItem("Peliculas"));
       arr.push(nuevoFavorito);
       localStorage.setItem("Peliculas", JSON.stringify(arr))
   })
}

