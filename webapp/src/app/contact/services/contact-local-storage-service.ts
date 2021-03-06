import {Injectable} from '@angular/core';
import {Contact} from './contact';


@Injectable()
export class ContactLocalStorageService {

  localStorageKey: string;

  constructor() {
    this.localStorageKey = 'ca-contacts';
    this.initializeLocalStorage();

    const contacts = [
      new Contact(1, 'Mika', 'Paakki', '0443065347', 'Tienhaara 27', 'Imatra'),
      new Contact(2, 'Joku', 'Toinen', '045113355', 'Koulukatu 11', 'Lappeenranta'),
      new Contact(3, 'Kolmas', 'Kontakti', '0400995511', 'Venetie 3', 'Lappeenranta')

    ];

    this.writeLocalStorageContacts(contacts);
  }

  public findContacts(): Contact[] {
    return this.readLocalStorageContacts();
  }

  public saveContact(contact: Contact) {
    const contacts = this.readLocalStorageContacts();
    contacts.push(contact);
    this.writeLocalStorageContacts(contacts);
  }
  public deleteContact (id: number): void {
    const contacts = this.readLocalStorageContacts();
    const index: number = contacts.findIndex(c => c.id === id);
    contacts.splice(index, 1);
    this.writeLocalStorageContacts(contacts);
  }
  public editContact (contact: Contact): void {
    const contacts = this.readLocalStorageContacts();
    const index: number = contacts.findIndex(c => c.id === contact.id);
    contacts[index] = contact;
    this.writeLocalStorageContacts(contacts);
  }
  public createContact (contact: Contact): void {
    // Read contacts from the local storage to a local variable (array)
    const contacts: Contact[] = this.readLocalStorageContacts();
    // Find current max. id value from existing contacts
    console.log(contacts);
    const ids = contacts.map(c => c.id); // See array map method documentation
    console.log(ids);
    // 1.
    const maxId = ids.length > 0 ? Math.max(...ids) : 0; // See MDN Math.max documentation
    console.log(maxId);
    const newId = maxId + 1;

    //( 2.
    // const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;)

    // Assign new id value for the new contact

    console.log(contact);
    contact.id = newId;
    console.log(contact);

    // Store new contact to the array (push)
    contacts.push(contact);

    // Write contacts to the local storage
    this.writeLocalStorageContacts(contacts);
  }

  getContactById(id: number): Contact {
    const contacts = this.readLocalStorageContacts();
    const index: number = contacts.findIndex(c => c.id === id);
    const contact = new Contact();
    Object.assign(contact, contacts[index]);
    return contact;
  }

  private initializeLocalStorage() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  private readLocalStorageContacts(): Contact[] {
    const data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data) as Contact[];
  }

  private writeLocalStorageContacts(contacts) {
    const data = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, data);
  }
}



