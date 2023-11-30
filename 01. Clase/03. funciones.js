/* function sumar(valor1,valor2) {

    //const total = valor1 + valor2
    
    const total = parseInt(valor1) + parseInt(valor2)
    
    return total;
} */


/* const sumar = (valor1,valor2) => {
    
    const total = parseInt(valor1) + parseInt(valor2)
    
    return total;
} */

const sumar = (valor1,valor2) => parseInt(valor1) + parseInt(valor2)


const resultado = sumar('6',2);
console.log(resultado);

const valor = nombre => 'Hola: ' + nombre;

console.log(valor('Juan'))