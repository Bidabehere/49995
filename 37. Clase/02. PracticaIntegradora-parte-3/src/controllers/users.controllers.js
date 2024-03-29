import { userService, coursesService } from "../repositories/services.js";
import MailingService from "../services/mailing.js";

const getUsers = async (req,res)=>{
    let users = await userService.getUsers();
    if(!users) return res.status(500).send({status:"error",error:"Couldn't get users due to internal error"})
    res.send({status:"success",payload:users})
}

const createUser = async(req,res)=>{
    let {first_name,last_name,dni,email,birthDate,gender} = req.body;
    if(!first_name||!last_name||!dni||!email||!birthDate) return res.status(400).send({status:"error",error:"Incomplete values"})
    let result = await userService.createUser({
        first_name,
        last_name,
        email,
        dni,
        birthDate,
        gender
    })
    if(!result) return res.status(500).send({status:"success",payload:result})
    res.send({status:"success",payload:result})
};

const registerUserToCourse = async(req,res)=>{
    const {uid,cid} = req.params;
    const course = await coursesService.getCourseById(cid);
    console.log(course);
    if(!course) return res.status(404).send({status:"error",error:"Course not found"})
    const user = await userService.getBy({_id:uid});
    if(!user) return res.status(404).send({status:"error",error:"User not found"});
    //checamos si el usuario ya tenía ese curso registrado
   // let courseExists = user.courses.some(c=>c._id.toString()===cid);
    //if(courseExists) return res.status(400).send({status:"error",error:"The user is already registered in this course"});
    //Si todo está bien, insertamos de ambos lados.
    /* user.courses.push(course._id);
    course.students.push(user._id);
    await userService.update(uid,user);
    await coursesService.update(cid,course); */
    
    const mailer = new MailingService();

    const from = "CoderTest";
    const to = "bidabehere@gmail.com";
    const subject = "bidabehere@gmail.com";
    const html = `<div><h1>Felicitaciones!</h1>
        <p> Bienvenido al curso ${course.title}. </p>
        </div>`;

    const result = await mailer.sendSimpleMail(from, to,subject, html )
    console.log(result);

    res.send({status:"success",message:"User added to course"})
}


export default {
    getUsers,
    createUser,
    registerUserToCourse
}


