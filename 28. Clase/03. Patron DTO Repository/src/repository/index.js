import { ContractRepository } from "./contacts.repository.js";
import { contactsDao } from "../dao/factory.js";

export const contactService = new ContractRepository(contactsDao);
