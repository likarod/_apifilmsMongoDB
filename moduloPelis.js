const fetch = require ("node-fetch");

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


exports.getHome = (req,res) => { 
    res.render ("home", {title: "Bienvenido/a.", message: "BIENVENIDO"});
}

exports.getBuscador = (req, res) => {
    res.render ("home");
}

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
        Poster: data.Poster
    });
    })
}

exports.getForm = (req, res) => {
    res.render("form", {titulo1: "¿Qué película desea guardar?."})
}

exports.getError = (req, res) => {
    res.status(404).render("error", {title: "Oh, lo siento, tienes un error 404"});
}

exports.postapiFilms = (req, res) => {
    res.status(200).render("exito", {title: "Enviado con éxito", message: "Tu formulario se ha enviado con éxito"});       
  }