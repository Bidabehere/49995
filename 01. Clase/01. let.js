let i = 0;

function foo(){
    i = 1;
    let j = 2;
    if(true){
        let i = 0
        console.log('i',i);
        console.log('j',j);
    }
    //console.log('j', j)
}
foo();
console.log('i fuera de la funcion', i)