import fs from 'fs';
import crypto from 'crypto';

export default class UserManager {
    
    constructor(path){
        this.path = path
    }

    getUsuarios = async () => {
        if(fs.existsSync(this.path)){
            const data = await fs.promises.readFile(this.path,'utf-8');
            const usuarios = JSON.parse(data);
            return usuarios;
        }else{
            return [];
        }
    }
    crearUsuario = async (usuario) => {
        const usuarios = await this.getUsuarios();
        if(usuarios.length === 0){
            usuario.id = 1;
        }else{
            usuario.id = usuarios[usuarios.length-1].id + 1;
        }

        usuario.salt = crypto.randomBytes(128).toString('base64');
        usuario.contrasena = crypto.createHmac('sha256',usuario.salt).update(usuario.contrasena).digest('hex');

        usuarios.push(usuario);
        await fs.promises.writeFile(this.path, JSON.stringify(usuarios,null,'\t'))
        return usuarios
    }
    validarUsuario = async (nombreUsuario, contrasena) =>{
        const usuarios = await this.getUsuarios();
        const usuarioIndex = usuarios.findIndex(u=> u.nombreUsuario == nombreUsuario);

        if(usuarioIndex === -1){
            console.log('No existe el usuario');
            return 'El usuario no existe';
        }
        const usuario = usuarios[usuarioIndex];
        const newHash = crypto.createHmac('sha256',usuario.salt).update(contrasena).digest('hex');

        if(newHash === usuario.contrasena){
            console.log('Logueado');
        }else{
            console.log('Contraseña inválida');
        }

    }
    borrarUsuario = async (idUsuario) => {
        try {
            
            const usuarios = await this.getUsuarios();
            const usuarioIndex = usuarios.findIndex(us => us.id == idUsuario);
            if(usuarioIndex !== -1){
                usuarios.splice(usuarioIndex,1);
                await fs.promises.writeFile(this.path,JSON.stringify(usuarios, null, '\t'));
                console.log('El usuario fue eliminado');
                return 'Usuario eliminado';
            }else{
                console.log('El usuario no existe');
                return 'El usuario que quiere eliminar no existe';
            }

        } catch (error) {
            console.log(error);
        }
    }
}