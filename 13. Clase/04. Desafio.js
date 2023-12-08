db.createCollection("clientes")

db.clientes.insertMany([{nombre:'Luis',apellido:'Lopez',curso:'Literatura',edad:17,correo:'mailLuis@mail.com',sexo:'M'},{nombre:'Luisa',apellido:'Delfino',curso:'Literatura',edad:17,correo:'correoLuisa@correo.com',sexo:'F'},{nombre:'Pedro',apellido:'Pascal',curso:'Matematicas',edad:18,correo:'correoPedro@correo.com',sexo:'M'},
{nombre:'Pablo',apellido:'Pedro',curso:'Matematicas',edad:15,correo:'correo@correo.com',sexo:'M'}
,{nombre:'Juan',apellido:'Lopez',curso:'Literatura',edad:17,correo:'correoL@correo.com',sexo:'M'}])


 
db.clientes.find()

2. 
db.clientes.find().sort({edad:-1})

3. 
db.clientes.find().sort({edad:1}).limit(1)

4.

db.clientes.find().sort({edad:1}).limit(1).skip(1)

5.
db.clientes.find({nombre:'Juan'})

6.
db.clientes.find({nombre:'Juan',edad:29})

7.
db.clientes.find({nombre:{$in:['Juan','Luis']}})

8.
db.clientes.find({edad:{$gt: 25}})

9.
db.clientes.find({edad:{$lte:25}})

10.
db.clientes.find({edad:{$ne:17}})

11.
db.clientes.find({edad:{$gte:17,$lte:18}})

12.
db.clientes.find({edad:15}) //filtro para validar
db.clientes.updateOne({edad:15},{$set:{edad:18}})

13. 
db.clientes.find({edad:17})
db.clientes.updateMany({edad:17},{$set:{edad:18}})

14. 
db.clientes.deleteMany({nombre:'Juan'})

15.
db.clientes.deleteMany({})
