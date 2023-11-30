import ManagerUsuarios from "./managers/ManagerUsuarios.js";

const manager = new ManagerUsuarios();

const env = async () => {

    let primerConsulta = await manager.consultarUsuarios();
    console.log(primerConsulta);
    let user = {
        nombre: 'Luis',
        apellido: 'Peres',
        edad: 32,
        curso: 'Backend'
    }
    let result = await manager.crearUsuario(user);
    console.log(result);
}

env()