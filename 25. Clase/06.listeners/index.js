process.on("exit",(code)=>{
    if(code === -4){
        return console.log("Proceso finalizado por argumentación inválida");
    }else{
        console.log("La aplicación finalizo correctamente");
    }
});

const listNumbers = (...numbers) => {
    let error = "";

    numbers.forEach(item =>{
        //Validar que el tipo de datos no numerico
        if(isNaN(parseInt(item))){
            error = "invalid parameters"
        }
    });
    console.log({
        error,
        data:numbers.map(i=>typeof i)
    });
    if(error){
        process.exit(-4)
    };
}

//listNumbers(1,2,3)
listNumbers(1,true,3,"palabra");
