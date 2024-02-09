import { usersModel } from "../models/users.model.js";

export class UserMongo{
    constructor(){
        this.model = usersModel;
    };
    async getAllUsers(){
        try {
            const users = await this.model.find();
            return users;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async getUserById(id){
        try {
            const users = await this.model.findById(id);
            if(!users){
                throw new Error(`No existe la orden con el id: ${id}`)
            }
            return users;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async saveUser(user){
        try {
            const userCreated = await this.model.create(user);
            return userCreated;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async updateUser(id,user){
        try {
            const userUpdate = await this.model.findByIdAndUpdate(id,user, {nre:true});
            return userUpdate;
        } catch (error) {
            throw new Error(error.message)
        }
    }

}