const persona = {
   name:'Juan',
   lastName: 'Lopez',
   age: 44
}

console.log('Antes de mutar su interior',persona)

persona.name = 'Pedro';

console.log('Luego de mutar su interior',persona)

//persona = 'Juan Pablo';
