/***
 * show dbs
 * use nombreBaseDeDatos
 * db.createCollection('NombreColeccion') //Parado en la base de datos
 * show collections //Ver las colecciones    
 * db.NombreColeccion.insertOne({'Datos'})
 * db.NombreColeccion.inserMany([{},{},{}])
 * db.NombreColeccion.find()
 */

db.alumnos.insertOne({"nombre": "Juan", "apellido":"Bida", "curso":"BackEnd","correo":"mail@mail.com"})