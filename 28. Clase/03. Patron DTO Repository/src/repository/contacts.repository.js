import { CreateContactDto, GetContactoDTO} from "../dao/dto/contact.dto.js";

export class ContractRepository{
    constructor(dao) {
        this.dao = dao
    }
    async getContacts(){
        const contacts = await this.dao.get();
        return contacts;
    }
    async createContact(contact){
        const contactDto = new CreateContactDto(contact);
        const contactCreated = await this.dao.post(contactDto);
        const contactDtoFront = new GetContactoDTO(contactCreated);
        return contactDtoFront;
    }
}