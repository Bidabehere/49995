use colegio
db.createCollection('estudiantes')


//{nombre:, apellido:, curso:, edad:, correo:, sexo:}
//nombre apellido curso


db.estudiantes.insertMany([{nombre:'Luis',apellido:'Lopez',curso:'Literatura',edad:17,correo:'mailLuis@mail.com',sexo:'M'},{nombre:'Luisa',apellido:'Delfino',curso:'Literatura',edad:17,correo:'correoLuisa@correo.com',sexo:'F'},{nombre:'Pedro',apellido:'Pascal',curso:'Matematicas',edad:18,correo:'correoPedro@correo.com',sexo:'M'},{nombre:'Pablo',apellido:'Pedro',curso:'Matematicas',edad:15,correo:'correo@correo.com',sexo:'M'},{nombre:'Juan',apellido:'Lopez',curso:'Literatura',edad:17,correo:'correoL@correo.com',sexo:'M'}])

db.estudiantes.insertOne({nombre:'Pedro',apellido:'Pacheco',curso:'Literatura'})

db.estudiantes.find().pretty()
db.estudiantes.find({sexo:'M'})
db.estudiantes.countDocuments()
db.estudiantes.countDocuments({sexo:'F'})