import moment  from "moment";

const hoy = moment();

const fechaNacimiento = moment('1949-13-20', 'YYYY-MM-DD');
if(fechaNacimiento.isValid()){
    console.log((`Desde mi nacimiento, han pasado ${hoy.diff(fechaNacimiento, 'days')} días`));
}else{
    console.log(`La fecha es inválida`);
}


//console.log(hoy);