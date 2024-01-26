import { Command } from "commander";


const program = new Command();


program
.option("-d", "variable de debug", false)//1 comando 2 descripcion 3 valor por defecto
.option("-p <port>","puerto de la aplicacion", 8080)
.option("-l <languaje>","idioma de la aplicacion","es")
.requiredOption(
    "-u <u>",
    "usuario que ejecuta la aplicacion",
    "No se recibio un usuario"
);

program.parse();

console.log("args", program.opts());
console.log("Otros argumentos", program.args);