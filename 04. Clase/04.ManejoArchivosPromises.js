const fs = require('fs');

const operacionesAsincronas = async () =>{
    
    await fs.promises.writeFile('./bdPromesa.txt', 'Hola Coders! ');

    let contenido = await fs.promises.readFile('./bdPromesa.txt', 'utf-8');

    console.log(contenido);

    await fs.promises.appendFile('./bdPromesa.txt', ' - Mas contenido');

    contenido = await fs.promises.readFile('./bdPromesa.txt', 'utf-8');

    console.log(contenido);

    fs.promises.unlink('./bdPromesa.txt');
}
operacionesAsincronas()