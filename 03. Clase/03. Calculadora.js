const sumar = (numero1,numero2) => numero1+numero2;
const restar = (numero1,numero2) => numero1-numero2;
const multiplicar = (numero1,numero2) => numero1*numero2;
const dividir = (numero1,numero2) => numero1/numero2;


const realizarOperacion = (numero1, numero2, funcionCallBack) =>{
    //console.log('Realizo la op Callback');
    const resultado = funcionCallBack(numero1,numero2);
    console.log(`El resultado de la operacion enviada es: ${resultado}`);
}

realizarOperacion(1,22, sumar);
realizarOperacion(10,3, restar);
realizarOperacion(10,3, multiplicar);
