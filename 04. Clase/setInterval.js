const contador = () => {
    let counter = 1
    console.log('Realizo la operación');
    let timer = setInterval( ()=>{
        console.log(counter++);
        if(counter>5){
            clearInterval(timer)
        }
    }, 1000 )
}

console.log('Inicio la tarea');
//contador()
console.log('Finalizo la tarea');

console.log('Inicio la tarea');
for (let contador = 0; contador <= 5 ; contador++) {
    console.log(contador);
}
console.log('Finalizo la tarea');