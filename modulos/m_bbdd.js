/* 
Módulo que se utilizará para hacer consultas a las bbdd de "FILMS". 
- Documento creado 14/09
*/
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

//Create.
const connect =  async () => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => { console.log(err); })
    return client;
}   

/*
Método para poder crear en el BBDD los documentos de las películas guardadas desde el FORM.pug.
*/
exports.crearDocPeliForm = async (datos) => {
    const client = await connect ();
    console.log("**************")
    console.log(datos)
    const myFilm = {
        Titulo: datos.titulo,
        Epoca: datos.epoca,
        Genero: datos.genero,
        Director: datos.director,
        Actores: datos.actors,
        Sinopsis: datos.sinopsis,
        Idiomas: datos.idiomas,
        Puntuacion: datos.puntuacion,
        Produccion: datos.producter,
        Poster: datos.image}
    const result = await client
    .db("films")
    .collection("Peliculas")
    .insertOne(myFilm);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    return result;
}


/*
Método para crear documentos en la BBDD guardando las películas favoritas desde la ruta film/:titulo 
*/
exports.crearDocPeliFavorita = async (datos) => {
    const client = await connect();
    const myFilm = {
        Titulo: datos.titulo,
        Epoca: datos.epoca,
        Genero: datos.genero,
        Director: datos.director,
        Actores: datos.actors,
        Sinopsis: datos.sinopsis,
        Idiomas: datos.idiomas,
        Puntuacion: datos.puntuacion,
        Produccion: datos.producter,
        Poster: datos.image}
    const result = await client
    .db("films")
    .collection("Peliculas")
    .insertOne(myFilm);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    return result;
}

//Read

exports.leerDocPeli = async (nombrePeli)  => {
    const client = await connect();
    result = await client
        .db("films")
        .collection("Peliculas")
        .findOne({ Titulo: nombrePeli });
    console.log(result)
    if (result) {
        console.log(`Se ha encontrado la pelicula con el título: '${nombrePeli}' en la colleción`);
        return result;
    } else {
        console.log(`No se encuentra el título: '${nombrePeli}'`);
        return null;
    }
}


//Update

/*
 Método para actualizar/editar un documento de la BBDD. 
*/
exports.editarDocPeli = async (Titulo, nuevoTitulo) => {
    const client = await connect();
    result = await client
        .db("films")
        .collection("Peliculas")
        .updateOne(
            { Titulo: Titulo }, 
            { $set: {Titulo:nuevoTitulo} },
            // { upsert: true }
            );

    console.log(`${result.matchedCount} documentos que coinciden con los criterios de consulta.`);
    if (result.upsertedCount > 0) {
        console.log(`One document was inserted with the id ${result.upsertedId._id}`);
        return result;
    } else {
        console.log(`${result.modifiedCount} documentos modificados.`);
    }
}

// //Delete
exports.borrarDocPeli = async (nombredelTitulo) => {
    const client = await connect();
    result = await client
        .db("films")
        .collection("Peliculas")
        .deleteOne({ Titulo: nombredelTitulo });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
    return result;
}