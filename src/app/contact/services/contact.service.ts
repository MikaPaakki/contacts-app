import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1, 'Mika', 'Paakki'),
      new Contact(2, 'Joku', 'Toinen'),
      new Contact(3, 'Kolmas', 'Kontakti')
    ];
  }
  getContacts(): Contact[] {
    return this.contacts;
  }
  addNewContact(contact: Contact) {
    this.contacts.push(contact);
  }
}



