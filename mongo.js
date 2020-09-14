const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
let dbo = db.db("films");

MongoClient.connect(url, { useUnifiedTopology: 
    true }, function(err, db){
    if(err) throw err;
    console.log("BBDD creada con éxito.");
    /*
    dbo.createCollection("Películas", function(err,res){
        console.log("Colección de películas creada");
        db.close();
    })
    */
//    exports.insertarPeli () => {
//     let myObj = { name: }
//    }
})

