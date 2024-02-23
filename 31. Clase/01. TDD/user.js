


const login = (user, password) =>{
    if(!password){
        return "No se ha proporcionado un password"
    }
    if(!user){
        return "No se ha proporcionado un usuario"
    }
    if(password !== "coder"){
        return "Contraseña incorrecta"
    }
    if(user !== "coder"){
        return "Credenciales incorrectas"
    }
    if(user === "coder" && password === "coder"){
        return "logueado"
    }
}




let testPasados = 0;
let testTotal = 5;


console.log(`--------- Prueba 1 ----------`);
console.log(`Si se pasa un password vacío, la función debe retornar (“No se ha proporcionado un password")`)
let result = login('coder','');
if(result === "No se ha proporcionado un password"){
    testPasados++;
    console.log("Paso test 1");
}else{
    console.log("No paso test 1");
}

console.log(`--------- Prueba 2 ----------`);
console.log(`Si se pasa un usuario vacío, la función debe retornar (“No se ha proporcionado un usuario”)`)
result = login("", "coder");
if(result === "No se ha proporcionado un usuario"){
    testPasados++;
    console.log("Paso test 2")
}else{
    console.log("No paso test 2")

}

console.log(`--------- Prueba 3 ----------`);
console.log(`Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)`)
result = login("coder","1coder");
if(result === "Contraseña incorrecta"){
    testPasados++
    console.log("Paso test 3")
}else{
    console.log("No paso test 3")
}

console.log(`--------- Prueba 4 ----------`);
console.log(`Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)`)
result = login("ucoder","coder");
if(result === "Credenciales incorrectas"){
    testPasados++;
    console.log("Paso test 4");
}else{
    console.log("No paso test 4");
}

console.log(`--------- Prueba 5 ----------`);
console.log(`Si  el usuario y contraseña coinciden, consologuear (“logueado”)`)
result = login("coder","coder");
if(result === "logueado"){
    testPasados++
    console.log("Paso test 5");
}else{
    console.log("No paso test 5");
}

console.log(`--------- Resultado de las pruebas ----------`);
if(testPasados === testTotal){
    console.log("Todas las pruebas pasaron");
}else{
    console.log(`Numero de pruebas pasadas: ${testPasados} de un total de: ${testTotal}`);
}

console.log(`--------- Fin de las pruebas ----------`);

