import UserManager from "./managers/UserManager.js";

const path = './files/Users.json';

const userManager = new UserManager(path);

const env = async () =>{
   // let usuarios = await userManager.getUsuarios();
   let user = {
    nombre: 'Luis',
    apellido: 'Sol',
    nombreUsuario: 'luisSol',
    contrasena: '123456'
   } 
  let usuarios =  await userManager.crearUsuario(user)
  ///await userManager.validarUsuario('luisSol','123456')
  //await userManager.validarUsuario('luisSol','12345')
  //await userManager.validarUsuario('luisS','12345')
 // await userManager.borrarUsuario(7);

  console.log(usuarios);
}

env();