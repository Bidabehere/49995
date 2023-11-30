import express from 'express';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
})

const users = [];

app.get('/api/user', (req,res)=>{

    res.status(200).send({
        status:"correcto",
        users
    })

})

app.post('/api/user', (req,res)=>{

    let cantUsers = users.length;

    let user = req.body;

    if(!user.first_name || !user.last_name){
        return res.status(400).send({
            status: "error",
            error: "Valores incompletos"
        })
    }
    user.id = cantUsers++;
    users.push(user);

    res.status(200).send({
        status: "correcto",
        mensaje: "Usuarios creado",
        users
    })

})

app.put('/api/user/:uid', (req,res)=>{


})

app.delete('/api/user/:uid', (req,res)=>{

    let uid = req.params.uid;
    console.log(uid);
    const userIndex = users.findIndex( (use) => use.id == uid )

    if(userIndex === -1){
        return res.status(400).send({
            status: "error",
            error: "Usuario no existe"
        })
    } 

    users.splice(userIndex,1);

    res.send({
        status:'Correcto',
        mensaje:'Usuario eliminado'
    })

})