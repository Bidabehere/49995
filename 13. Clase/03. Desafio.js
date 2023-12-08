

db.estudiantes.insertMany([{nombre:'Luis',apellido:'Lopez',curso:'Literatura',edad:17,correo:'mailLuis@mail.com',sexo:'M'},{nombre:'Luisa',apellido:'Delfino',curso:'Literatura',edad:17,correo:'correoLuisa@correo.com',sexo:'F'},{nombre:'Pedro',apellido:'Pascal',curso:'Matematicas',edad:18,correo:'correoPedro@correo.com',sexo:'M'},{nombre:'Pablo',apellido:'Pedro',curso:'Matematicas',edad:15,correo:'correo@correo.com',sexo:'M'},{nombre:'Juan',apellido:'Lopez',curso:'Literatura',edad:17,correo:'correoL@correo.com',sexo:'M'}])

db.estudiantes.insertOne({nombre:'Pedro'})

db.estudiantes.countDocuments() //12


//proyeccion
db.estudiantes.find({},{nombre:1, edad:1})

//proyeccion y ordenamiento
db.estudiantes.find({},{nombre:1, edad:1}).sort({nombre:1})


//find
db.estudiantes.find({curso:{$eq:'Matematicas'}},{nombre:1, edad:1}).sort({nombre:1})

//find
db.estudiantes.find({edad:{$lte:17}},{nombre:1, edad:1}).sort({nombre:1})
