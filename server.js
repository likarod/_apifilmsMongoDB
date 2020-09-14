const express = require ("express");
const bodyParser = require ("body-parser");
const pelis = require ("./moduloPelis");

const app = express();

//Utilizar un Middleware para visualizar las imágenes.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

//Motor de visualización del PUG.
app.set("views", "./views"); //Aquí se le indica en qué directorio se encuentra el PUG.
app.set('view engine', 'pug'); //Llamada al Motor de vista.

// -----> Rutas en el PUG.
app.get("/", pelis.getHome);
// Enruta para buscar películas desde la API
app.get("/", pelis.getBuscador);
// Ruta para mostrar el título buscado desde la API en un nuevo PUG
app.get("/films/:titulo", pelis.getpeliFinal);
// Ruta para editar la película guardada en LS desde la posición 
app.get("/films/edit/:id/:Titulo?/:Year?/:Genre?/:Director?/:Actors?", pelis.getPeliEditar);
//Ruta para mostrar el detalle de la película guarda en el LS en función de la posición.
app.get("/films/detalle/:id/:Titulo?/:Year?/:Genre?/:Director?/:Actors?", pelis.getPeliDetalle);
// Ruta para mostrar el formulario.
app.get("/form", pelis.getForm)
// Ruta 404 Not Found.
app.get("*", pelis.getError);

//------> Rutas para la API
// Ruta para mostrar que el formulario se ha enviado.
app.post("/api/films", pelis.postapiFilms);
//Llamadas a la API REST
app.get("/api/films/:titulo", pelis.getapiFilms);


app.listen (3000, function ( ) { 
    console.log ('¡Aplicación de ejemplo escuchando en el puerto 3000!') 
  })
