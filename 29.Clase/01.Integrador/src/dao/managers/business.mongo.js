import { businessModel } from "../models/business.model.js";

export class BusinessMongo{
    constructor(){
        this.model = businessModel;
    }

    async getAllBusiness(){
        try {
            const business = await this.model.find();
            return business;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async getBusinessById(id){
        try {
            const business = await this.model.findById(id);
            if(!business){
                throw new Error(`No existe el negocio con ese ID: ${id}`);
            }
            return business;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async createBusiness(business){
        try {
            const businessCreated = await this.model.create(business);
            return businessCreated;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async updateBusiness(id,business){
        try {
            const businessUpdate = await this.model.findByIdAndUpdate(id,business,{new:true})
            return businessUpdate;
        } catch (error) {
            throw new Error(error.message)
        }
    }

}