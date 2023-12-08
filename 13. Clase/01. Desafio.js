use baseCRUD
db.createCollection('mascotas')



//{nombre:,especie:,edad:}

[{nombre:'Thom',especie:'Policia',edad:15},{nombre:'Rita',especie:'no',edad:15}]

db.mascotas.insertOne({nombre:'Rocko',especie:'Policia',edad:8})
db.mascotas.insertMany([{nombre:'Thom',especie:'Policia',edad:15},{nombre:'Rita',especie:'no',edad:15}])


db.mascotas.find({especie:'Policia'})

db.mascotas.countDocuments()