/*
Se genera un FAKE FORM para poder realizar un POST y mandar los datos a la BBDD y que se puedan leer rápidamente.
*/ 
let favorito = document.getElementById("btnFavorito");
    favorito.addEventListener("click", () => {
    // POST DATA para mandar los datos al fake FORM
    let nuevoFavorito = new FormData(); 
    let datos = document.getElementsByTagName("span");

    console.log(datos[0].innerText)
        nuevoFavorito.append("Titulo", datos[0].innerText);
        nuevoFavorito.append("Epoca", datos[1].innerText);
        nuevoFavorito.append("Genero", datos[2].innerText)
        nuevoFavorito.append("Director", datos[3].innerText);
        nuevoFavorito.append("Actores", datos[4].innerText)
        nuevoFavorito.append("Sinopsis", datos[5].innerText)
        nuevoFavorito.append("Idiomas", datos[6].innerText)
        nuevoFavorito.append("Puntuacion", datos[7].innerText)
        nuevoFavorito.append("Produccion", datos[8].innerText)
        nuevoFavorito.append("Poster", document.getElementById("poster").src);
        console.log(nuevoFavorito);

        //Aquí se utiliza AJAX para mandar los datos y realizar el POST. También se especifica la ruta a donde quiere recargar.  
    
       let xhr = new XMLHttpRequest();
       //Send the proper header information along with the request
        
            xhr.open('POST', "/api/films", true);

            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            xhr.onload = function(){
            console.log("Realizado el envio");
            console.log(this.response);
            };
        xhr.send(nuevoFavorito);
    });

