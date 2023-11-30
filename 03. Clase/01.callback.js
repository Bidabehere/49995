function funcionDerivadora(valor, funcionCallBack) {
    funcionCallBack(valor)
}

const contarLetras = (letrar) =>{
    let cantLetras = letrar.trim().length;
    console.log(`Cantidad de letras son: ${cantLetras}`);
}
const contarElementos = (arr) => {
    let cantElementos = arr.length
    console.log(`La cantidad de elemento del arr es: ${cantElementos}`);
}


funcionDerivadora(' El Camino es el estudio ', contarLetras)
funcionDerivadora([1,2,33,56], contarElementos)