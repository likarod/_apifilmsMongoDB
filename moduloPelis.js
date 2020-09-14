const fetch = require ("node-fetch");

// Renderizar el HOME
exports.getHome = (req,res) => { 
    res.render ("home", {title: "Bienvenido/a.", message: "BIENVENIDO"});
}

// Renderizar el HOME para buscar las películas favolitas.
exports.getBuscador = (req, res) => {
    res.render ("home");
}

// Método para llamar a la API
exports.getapiFilms = (req, res) => {
    const titulo = req.params.titulo;
    fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=12267320`)
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    res.json(data);
    })
}
// Método para actualizar del LS las películas.
exports.getPeliEditar = (req, res) => {
    console.log(req.query);
    res.render("form", {
        tituloEdit: req.query.Titulo, epocaEdit: req.query.Year, generoEdit: req.query.Genre, directorEdit: req.query.Director, 
        actorsEdit: req.query.Actors, sinopsisEdit: req.query.Sinopsis,
        idiomasEdit: req.query.Idiomas,
        puntuacionEdit: req.query.Puntuacion, 
        produccionEdit: req.query.Produccion
    })
}
// Metodo para mostar en detalle de las películas. 
exports.getPeliDetalle = (req, res) => {
    console.log(req.query)
    res.render("pelicula", {
        tituloPeli: req.query.Titulo, epocaPeli: req.query.Year, generoPeli: req.query.Genre,peliDirector: req.query.Director, 
        actorPeli: req.query.Actors,sinopsisPeli: req.query.Sinopsis,
        idiomasPeli: req.query.Idiomas, 
        puntuacionPeli: req.query.Puntuacion, 
        producterPeli: req.query.Produccion,
        Poster: req.query.Poster
    })
}

// Método para renderizar los datos de la API en un PUG.
exports.getpeliFinal = (req, res) => {
    const titulo = req.params.titulo;
    fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=12267320`)
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    res.render("pelicula", {
        mensaje: "La película de su eleección ",
        tituloPeli: data.Title,
        epocaPeli: data.Year,
        generoPeli: data.Genre,
        peliDirector: data.Director,
        actorPeli: data.Actors,
        sinopsisPeli: data.Plot,
        idiomasPeli: data.Language,
        puntuacionPeli: data.imdbRating,
        productorPeli: data.Production,
        Poster: data.Poster,
    });
    })
}



// Método para renderizar el formulario de "Guardar favoritos"
exports.getForm = (req, res) => {
    res.render("form", {titulo1: "¿Qué película desea guardar?."})
}

// Método POST para mostrar un éxito en el formulario.
exports.postapiFilms = (req, res) => {
    res.status(200).render("exito", {title: "Enviado con éxito", message: "Tu formulario se ha enviado con éxito"});       
  }
// Método para mostar Error 404.
exports.getError = (req, res) => {
    res.status(404).render("error", {title: "Oh, lo siento, tienes un error 404"});
}



