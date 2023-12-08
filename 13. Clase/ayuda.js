show dbs // Muestra las bases de datos existentes.
use <db_name> //: Crea una nueva base de datos (en caso de no existir) y se posiciona sobre ella 
db //: Muestra en qué base de datos estamos posicionado.
show collections //: Muestra todas las colecciones disponibles en la base de datos posicionada.
db.createCollection(name) //: Crea una colección en la base de datos posicionada.
db.dropDatabase()//: Elimina la base de datos actual.
db.collection.drop()// : Elimina la colección de la base de datos posicionada.
db.collection.insertOne(doc) // : Agrega un nuevo documento a la colección seleccionada.
db.collection.insertMany(docs) //: Agrega múltiples documentos a la colección seleccionada (dado un arreglo de documentos).
db.collection.findOne(opt) //: Busca un elemento que cumpla con los criterios de búsqueda (opt), devuelve el primer documento que cumpla con dicho criterio.
db.collection.find(opt) //:Devuelve todos los documentos que cumplan con dicho criterio. 
db.collection.find(opt).pretty() //: Añadido para hacer más presentables los resultados de un find().
db.collection.estimatedDocumentCount() 
db.collection.countDocuments(opt)