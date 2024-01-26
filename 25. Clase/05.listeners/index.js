process.on("exit", ()=>{
    console.log("La aplicacion finalizo");
})
process.on("uncaughtException", (error,origin)=>{
    console.log(`Hubo un error: ${error} el origen es: ${origin}`);
})

funcionQueNoExiste()
process.exit()

