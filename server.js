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

//Rutas en el PUG.
app.get("/", pelis.getHome);
app.get("/", pelis.getBuscador);
app.get("/films/:titulo", pelis.getpeliFinal);
app.get("/form", pelis.getForm)
app.get("*", pelis.getError);

//Rutas para la API
app.post("/api/films", pelis.postapiFilms);
app.get("/api/films/:titulo", pelis.getapiFilms);


app.listen (3000, function ( ) { 
    console.log ('¡Aplicación de ejemplo escuchando en el puerto 3000!') 
  })