
const temporizador = (callBack) => {
    setTimeout(()=>{
        callBack()
    },5000) //mili segundos
}

const operacion = () => console.log('Realizando la operación');


console.log('Inicio la tarea');
temporizador(operacion);
console.log('Tarea finalizada');