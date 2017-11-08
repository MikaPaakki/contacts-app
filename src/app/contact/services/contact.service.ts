import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1, 'Mika', 'Paakki', '0443065347', 'Tienhaara 27', 'Imatra'),
      new Contact(2, 'Joku', 'Toinen', '045113355', 'Koulukatu 11', 'Lappeenranta'),
      new Contact(3, 'Kolmas', 'Kontakti', '0400995511', 'Venetie 3', 'Lappeenranta')

    ];
  }
  getContacts(): Contact[] {
    return this.contacts;
  }
  addNewContact(contact: Contact) {
    this.contacts.push(contact);
  }
  getContactById(id: number): Contact {
    const index: number = this.contacts.findIndex(c => c.id === id);
    let contact = new Contact();
    Object.assign(contact, this.contacts[index]);
    return contact;
  }
  editContact(contact: Contact) {
  }
  saveNewContact(contact: Contact) {
  }
  deleteContact(contact: Contact) {
  }
}



