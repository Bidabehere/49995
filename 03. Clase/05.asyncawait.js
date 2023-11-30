const dividir = (dividendo, divisor) =>{
    return new Promise((resolve,reject)=>{
        if(divisor === 0){
            reject('No se puede dividir por 0.');
        }else{
            resolve(dividendo/divisor);
        }
    })
}


const calculo = async () => {

    try{
        const resultado = await dividir(5,0)
        console.log(`El resultado es: ${resultado}`);
    } catch (error) {
        console.log(error);
        
    }

}

calculo()

/* dividir(5,0)
    .then(resultado=>{
        console.log(resultado);
    })  
    .catch(error=>{
        console.log(error);
    }); */