// Módulo que se utilizará para hacer consultas a las bbdd. - Documento creado 14/09
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

//Create.
const connect =  async () => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => { console.log(err); })
    return client;
}   

exports.crearDocumentoPeli = async (nuevoFavorito) => {
    const client = await connect();
    /*const myFilm = {
        Tituto: Titulo,
        Epoca: Epoca,
        Genero: Genero,
        Director: Director,
        Actores: Actores,
        Sinopsis: Sinopsis,
        Idiomas: Idiomas,
        Puntuacion: Puntuacion,
        Produccion: Produccion,
        Poster: Poster
    }*/
    const result = await client
        .db("films")
        .collection("Peliculas")
        .insertOne(nuevoFavorito);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

//Read
exports.getDocumentoPeli = async (titulo)  => {
    const client = await connect();
    result = await client
        .db("films")
        .collection("Peliculas")
        .findOne({ Titulo: titulo });
    console.log(result)
    if (result) {
        console.log(`Se ha encontrado la pelicula de título con el título: '${titulo}' en la colleción`);
        return result;
    } else {
        console.log(`No se encuentra el título: '${titulo}'`);
        return null;
    }
}

//Update
exports.updatePeliculas = async (nameOfListing, updatedListing) => {
    const client = await connect();
    result = await client
        .db("films")
        .collection("listingsAndReviews")
        .updateOne(
            { name: nameOfListing }, 
            { $set: updatedListing },
            { upsert: true });

    console.log(`${result.matchedCount} documentos que coinciden con los criterios de consulta.`);
    if (result.upsertedCount > 0) {
        console.log(`One document was inserted with the id ${result.upsertedId._id}`);
        return result;
    } else {
        console.log(`${result.modifiedCount} documentos modificados.`);
    }
}

//Delete
exports.deleteCustomers = async (nameOfListing) => {
    const client = await connect();
    result = await client
        .db("films")
        .collection("Peliculas")
        .deleteOne({ name: nameOfListing });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
    return result;
}