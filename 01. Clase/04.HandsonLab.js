const mostrarLista = (elementos = []) => {

    if(elementos.length === 0){
        return `Lista vacía`;
    }
    
    elementos.forEach(elemento => console.log('Elemento del Arr: ', elemento) );
    
    return elementos.length;

}

let resultado1 = mostrarLista();

console.log(`resultado1: ${resultado1}`)

/*** */

let resultado2 = mostrarLista(['Juan','Lucas',2,23]);

console.log(`resultado2: ${resultado2}`)