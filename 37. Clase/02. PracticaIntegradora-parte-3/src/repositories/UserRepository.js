export default class UserRepository{
    constructor(dao){
        this.dao = dao;
    }
    getUsers = async () =>{
        return await this.dao.getAll()
    }
    getBy = async (params) =>{
        return await this.dao.getBy(params)
    }
    createUser = async (user) => {
        return await this.dao.saveUser(user);
    }
    update = async (id,user) =>{
        return await this.dao.updateUser(id, user);
    }
}