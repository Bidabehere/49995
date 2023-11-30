

class TicketManager {

    #precioBaseDeGanancia = 1.15;
    //static precio = 22
    //static eventos = [] //Variable global a todas las instancias

    constructor(){
        this.eventos = []; //Particular a la instancia
       // this.products = [];
    }

    addEvento = (nombre,lugar,precio) => {

        let cantEventos = this.eventos.length;

        if(!nombre || !lugar || !precio){
            return 'Todos los datos son requeridos'
        }
        
        const eventoLugar = this.eventos.find(evento => evento.lugar == lugar);

        if(eventoLugar) {
            return `El evento ya existe en: ${lugar}`;
        }
  
        const evento = {
            nombre,
            lugar,
            precio: precio * this.#precioBaseDeGanancia,
            capacidad: 50,
            fecha: Date(),
            participantes: [],
            id: ++cantEventos
        }

        this.eventos.push(evento);

        return this.eventos;

    } 

    getEventos = () => {
        return this.eventos;
    }

    getEvento = (idEvento) => {
        
        const evento = this.eventos.find( evento => evento.id == idEvento );
        
        if(evento){
            return evento;
        }else{
            return 'Not found'
        }
    }

    addParticipante = (idEvento, idParticipante) => {

        const evento = this.getEvento(idEvento);

        if(evento === 'Not found'){
            return 'El evento no existe';
        }
       
       const registro = evento.participantes.find(idPersona => idPersona == idParticipante);

       if(registro){
        return `El participante: ${idParticipante} ya compro entrada`;
       }

       evento.participantes.push(idParticipante);
       return evento;
    }


}

const ticketManager = new TicketManager();

//let evento = ticketManager.getEvento(1);
ticketManager.addEvento('Baradero Rock', 'Baradero',2500);
evento = ticketManager.addEvento('Baradero Rock', 'San Pedro',2500);

//console.log(evento);
//console.log('evento: ', evento );
console.log('------------------------------------------------------------');
console.log('------------------------------------------------------------');

const unEvento = ticketManager.getEvento(11);

//console.log(unEvento);

let user = ticketManager.addParticipante(1,1)
//console.log(user);
user = ticketManager.addParticipante(1,1)
//console.log(user);
user = ticketManager.addParticipante(1,2)
//console.log(user);
user = ticketManager.addParticipante(1,2)
//console.log(user);

console.log(TicketManager.precio)
console.log(TicketManager.precioBaseDeGanancia)



