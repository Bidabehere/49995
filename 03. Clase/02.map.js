const arregloOriginal = [1,2,3,4,5,6];

const nuevosValores = arregloOriginal.map(x => x +1);

console.log(nuevosValores);

const funcionPar = (valor) =>{

    if(valor%2 === 0){ 
        return valor
    }else{
        return 'No es par'
    }
}

const pares = arregloOriginal.map(funcionPar);

//console.log(pares);

/** Mi MAP */

function miFuncionMAP(arreglo, funcionCallBack) { // Viene como parametro
    const nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
          const nuevoValor = funcionCallBack(arreglo[i]);
          nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}

const nuevoArreglo = miFuncionMAP(arregloOriginal, funcionPar)
//console.log(nuevoArreglo);

Array.prototype.miMap = function(funcionCallBack){
    const nuevoArreglo = [];
    for (let i = 0; i < this.length; i++) {
          const nuevoValor = funcionCallBack(this[i]);
          nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}

const arrMiMap = arregloOriginal.miMap(x => x +1);
console.log(arrMiMap);