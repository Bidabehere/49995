const fs = require('fs');

fs.writeFile('./bd.txt', 'Hola desde un CallCack Coders!', (error)=>{
    //Validar el error
    if(error) return console.log('Error al escribir el archivo');
        fs.readFile('./bd.txt', 'utf-8',(error,contenido)=>{
            if(error) return console.log('Error al leer el archivo');
                console.log('Nivel 1: ',contenido);
                fs.appendFile('./bd.txt', ' - Mas info para el archivo', (error)=>{
                    if(error) return console.log('Error al actualizar el archivo');
                    fs.readFile('./bd.txt', 'utf-8',(error,data)=>{
                        if(error) return console.log('Error al leer el archivo');
                        console.log('Nivel 2: ',data);
                        fs.unlink('./bd.txt', (error)=>{
                            if(error) return console.log('Error al borrar el archivo');
                        })

                    })
                })

        })

})